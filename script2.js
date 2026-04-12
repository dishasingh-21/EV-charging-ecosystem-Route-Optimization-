console.log("SCRIPT LOADED");

const params = new URLSearchParams(window.location.search);
const start = params.get("start");
const end = params.get("end");
const batteryPercent = parseFloat(params.get("battery"));

const DEBUG_VISUAL = true;
//Debugging and visualisation
let debug_layers=[];

function sleep(ms){
    return new Promise(res=>setTimeout(res,ms));
}

function clear_layer(){
    debug_layers.forEach(layer => map.removeLayer(layer));
    debug_layers = [];
}

function drawDebugEdge(a,b,color){
    if(!DEBUG_VISUAL) return;
    let line = L.polyline([
        [a.lat,a.lon], [b.lat,b.lon]
    ],{
        color:color,
        weight:3,
        opacity:0.6
    }).addTo(map);
    debug_layers.push(line);
}


//Leaflet.js part
var map = L.map('map').setView([26.5, 74.5],6);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//Distance calculation between two points (Local Optimization using Open Source Routing Machine)
async function distance(a,b){
    let url = `https://router.project-osrm.org/route/v1/driving/${a.lon},${a.lat};${b.lon},${b.lat}?overview=false`;
    let res = await fetch(url);
    let data = await res.json();
    return data.routes[0].distance/1000;
}

//Haversine distance.
function haversine(a,b){
    const R=6371;
    let lat1 = a.lat*Math.PI/180;
    let lat2 = b.lat*Math.PI/180;
    let lon1 = a.lon*Math.PI/180;
    let lon2 = b.lon*Math.PI/180;
    let Dlat = lat2-lat1;
    let Dlon = lon2-lon1;
    let h = Math.sin(Dlat/2)**2 + Math.cos(lat1)*Math.cos(lat2)*(Math.sin(Dlon/2)**2);
    let ans = R*(2*Math.asin(Math.sqrt(h)));
    return ans;
}

//Getting coordinates of locations
async function getCoordinates(place){
    try{
        let res = await fetch(
            `https://nominatim.openstreetmap.org/search?q=${place}&format=json`
        );
        let data = await res.json();
        if(data.length===0) return null;
        return {
            name: place,
            lat: parseFloat(data[0].lat),
            lon: parseFloat(data[0].lon)
        };
    }
    catch(error){
        console.log("The entered location doesn't exist. Try checking for spelling mistakes.");
        alert("Location doesn't exist. Try checking for spelling mistakes.");
    }
}

//Priority Queue Implementation
class PriorityQueue{
    constructor(){
        this.heap=[];
    }
    getLeftChildIndex(parentIndex){
        return 2*parentIndex+1;
    }
    getRightChildIndex(parentIndex){
        return 2*parentIndex+2;
    }
    getParentIndex(childIndex){
        return Math.floor((childIndex-1)/2);
    }
    hasLeftChild(index){
        return this.getLeftChildIndex(index)<this.heap.length;
    }
    hasRightChild(index){
        return this.getRightChildIndex(index)<this.heap.length;
    }
    hasParent(index){
        return this.getParentIndex(index)>=0;
    }
    leftChild(index){
        return this.heap[this.getLeftChildIndex(index)];
    }
    rightChild(index){
        return this.heap[this.getRightChildIndex(index)];
    }
    parent(index){
        return this.heap[this.getParentIndex(index)];
    }
    swap(idx1, idx2){
        const temp=this.heap[idx1];
        this.heap[idx1]=this.heap[idx2];
        this.heap[idx2]=temp;
    }
    isEmpty(){
        if(this.heap.length===0) return true;
        return false;
    }
    top(){
        if(this.heap.length===0) return null;
        return this.heap[0];
    }
    remove(){
        if(this.heap.length===0) return null;
        const item = this.heap[0];
        this.heap[0]=this.heap[this.heap.length-1];
        this.heap.pop();
        this.heapifyDown();
        return item;
    }
    add(item){
        this.heap.push(item);
        this.heapifyUp();
    }
    heapifyUp(){
        let index = this.heap.length-1;
        while(this.hasParent(index) && this.parent(index).f>this.heap[index].f){
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }
    heapifyDown(){
        let index=0;
        while(this.hasLeftChild(index)){
            let SmallerChildIndex=this.getLeftChildIndex(index);
            if(this.hasRightChild(index) && this.rightChild(index).f<this.leftChild(index).f){
                SmallerChildIndex=this.getRightChildIndex(index);
            }
            if(this.heap[index].f>=this.heap[SmallerChildIndex].f){
                this.swap(SmallerChildIndex, index);
                index=SmallerChildIndex;
            }
        }
    }
}

//Caching.
let cache = new Map();
async function getDistance(a,b){
    let key = `${a.lat},${a.lon}-${b.lat},${b.lon}`;
    let reverseKey = `${b.lat},${b.lon}-${a.lat},${a.lon}`;
    if(cache.has(reverseKey)) return cache.get(reverseKey);
    if(cache.has(key)) return cache.get(key);
    let d = await distance(a,b);
    cache.set(key,d);
    cache.set(reverseKey,d);
    return d;
}

//Route Optimization Core
//1. Checking if we can directly reach destination in one go.
const MAX_RANGE = 400;
async function DirectPossible(START, END, initialRange){
    let d = await getDistance(START,END);
    let result = d<=initialRange;
    return result;
}

//2. Else we go with A_Star Algorithm.
async function aStar(nodes, start, end, MAX_RANGE, initialRange, adj){
    let n=nodes.length;
    let g=new Array(n).fill(Infinity);
    let f=new Array(n).fill(Infinity);
    let parent = new Array(n).fill(null);
    let bestBattery = new Array(n).fill(0);
    let visited = new Set();

    let open = new PriorityQueue();
    g[start]=0;
    f[start]=haversine(nodes[start],nodes[end]);
    bestBattery[start]=initialRange;
    open.add({idx: start, f:f[start], battery: initialRange});
    let iterations = 0;
    while(!open.isEmpty()){
        let {idx:current, battery}=open.remove();
        let visitKey = `${current}-${Math.floor(battery/25)}`;
        if(visited.has(visitKey)) continue;
        visited.add(visitKey);
        if(current === end) break;
        iterations++;
        if(iterations>5000) {
            console.log("Too many iterations. Stopping!");
            return null;
        }
        let movedfromhere = false;
        for(let i=0; i<adj[current].length; i++){
            let a = Math.min(current, adj[current][i]);
            let b = Math.max(current, adj[current][i]);
            let key=`${a}-${b}`;
            let d=graph.distances[key];
            if(d>battery) continue;
            movedfromhere=true;
            let newBattery = MAX_RANGE;
            let new_g = g[current]+d;
            if(new_g>=g[adj[current][i]]) continue;
            g[adj[current][i]]=new_g;
            bestBattery[adj[current][i]]=newBattery;
            let a1 = Math.min(adj[current][i],end);
            let b1 = Math.max(adj[current][i],end);
            let key2 = `${a1}-${b1}`;
            let h=graph.distances[key2];
            f[adj[current][i]]=g[adj[current][i]]+h;
            parent[adj[current][i]]={
                node:current, battery:battery
            };
            open.add({idx:adj[current][i], f:f[adj[current][i]], battery: newBattery});
        }
        // for(let i=0; i<n; i++){
        //     if(i===current) continue;
        //     let d = haversine(nodes[current],nodes[i]);
        //     if(d>MAX_RANGE) continue;
        //     if(d>battery) continue;
        //     if(battery < MAX_RANGE*0.3) continue;
        //     movedfromhere=true;
        //     let newBattery=battery-d;
        //     if(nodes[i].isCharging) newBattery=MAX_RANGE;
        //     let new_g = g[current]+d;
        //     if(newBattery<=bestBattery[i] && new_g>=g[i]) {
        //         continue;
        //     }
        //     g[i]=new_g;
        //     bestBattery[i]=newBattery;
        //     let h = haversine(nodes[i],nodes[end]);
        //     if(newBattery<MAX_RANGE*0.5) h*=0.5;
        //     f[i]=g[i]+h;
        //     parent[i]={
        //         node:current, battery:battery
        //     };
        //     open.add({idx:i, f:f[i], battery: newBattery});
        // }
        if(!movedfromhere) console.log(`deadend at ${nodes[current].town}, ${nodes[current].subtown}`);
    }
    let path=[];
    let cursor=end;
    let current_battery = bestBattery[end];
    let seen = new Set();
    while(cursor!==start){
        let key = `${cursor}-${Math.floor(current_battery/25)}`;
        if(seen.has(key)) {
            alert("Cycle detected in graph. No feasible route!");
            return null;
        }
        seen.add(key);
        path.push(nodes[cursor]);
        if(parent[cursor]) {
            current_battery=parent[cursor].battery;
            cursor=parent[cursor].node;
        }
        else break;
    }
    path.reverse();
    if(path.length<2) {
        console.log(`only ${path.length} (${path[0].name}) stations possible in path. That's why youre getting battery constraints.`);
    }
    return path;
}

//Draw Route.
async function drawRoute(route, batteryPercent){
    let remaining = MAX_RANGE*(batteryPercent/100);
    let fullPath = [];
    let promises = [];
    for(let i=0; i<route.length-1; i++){
        let start = route[i];
        let end = route[i+1];
        let url = `https://router.project-osrm.org/route/v1/driving/${start.lon},${start.lat};${end.lon},${end.lat}?overview=full&geometries=geojson`;
        promises.push(fetch(url).then(res=>res.json()));
    }
    
    let results = await Promise.all(promises);
    results.forEach((data,i)=>{
        if(!data.routes || data.routes.length ===0) return;
        let distance_travelled = data.routes[0].distance/1000;
        remaining -= distance_travelled;
        let next = route[i+1];
        if(next.isCharging){
            remaining = MAX_RANGE;
        }
        let coords = data.routes[0].geometry.coordinates;
        coords.forEach((c)=>{
            const pt = [c[1], c[0]];
            if(fullPath.length>0){
                const last = fullPath[fullPath.length-1];
                if(last[0]===pt[0] && last[1]===pt[1]){
                    return;
                }
            }
            fullPath.push(pt);
        });
        let midcoords = coords[Math.floor(coords.length/2)];
        let mid = [midcoords[1], midcoords[0]];
        L.marker(mid).addTo(map).bindPopup(
            `Distance: ${distance_travelled.toFixed(1)} km<br>
            Battery equivalent left: ${remaining.toFixed(1)} km`
        );
    });

    let poly = L.polyline(fullPath, {
        color: 'black',
        weight: 6
    }).addTo(map);
    map.fitBounds(poly.getBounds());

    route.forEach((p,index) => {
        let isStart = index === 0;
        let isEnd = index === route.length - 1;
        let isCharging = p.isCharging;
        let color = "blue";
        if (isStart) color = "green";
        else if (isEnd) color = "red";
        else if (isCharging) color = "orange";
        let icon = L.circleMarker([p.lat, p.lon], {
            radius: 8,
            color: color,
            fillColor: color,
            fillOpacity: 1
        }).addTo(map);
        icon.bindPopup(
            `${p.name || p.subtown || "Charging Station"}`
        );
        let label = p.name || p.subtown || p.town || "Charging Station";
        if (isCharging) {
            icon.bindTooltip(label, {
                permanent: true,
                direction: "top",
                offset: [0, -10],
                className: "station-label"
            });
        }
    });
}

//get total distance.
function getTotalDistance(route) {
    let total = 0;
    for (let i = 0; i < route.length - 1; i++) {
        let dist = haversine(route[i], route[i+1]);
        total += dist;
    }
    return total;
}

//starter function.
async function init(){
    console.log("INIT RUNNING");

    try {
        const response = await fetch('workable_stations.json');
        graph = await response.json();
        console.log("Graph loaded:", graph.stats);
    } catch (error) {
        console.error("Failed to load stations:", error);
        alert("Please ensure workable_stations.json is available");
        return;
    }

    let startloc = await getCoordinates(start);
    let endloc = await getCoordinates(end);
    let initialRange = MAX_RANGE*(batteryPercent/100);
    console.log(`Current battery eq:${initialRange}, starting to filter stations.`);

    let route;
    if(await DirectPossible(startloc, endloc, initialRange)){
        route = [startloc, endloc];
    }
    else{
        console.log("Stations:", stations);
        let AllNodes=[startloc,...graph.station.map(s => ({...s, isCharging: true})),endloc];
        //Build adjancency list for filtered traversal according to starting battery.
        let maxhop = Math.min(MAX_RANGE*0.8, initialRange*1.5);
        let adj = new Array(AllNodes.length).fill(0).map(()=>[]);
        for(let i=0; i<AllNodes.length; i++){
            let candidates = [];
            for(let j=0; j<graph.station.length; j++){
                let key = `${Math.min(i,j)}-${Math.max(i,j)}`;
                if(graph.distances[key] && graph.distances[key]<=maxhop){
                    candidates.push(j+1);
                }
            }
            adj[i]=candidates.slice(0,10);
        }
        console.log("finding best possible route..running our own A*");
        route = await aStar(AllNodes, 0, AllNodes.length-1, MAX_RANGE, initialRange, adj);
        console.log("route decided!");
    }
    if(!route || route.length < 2){
        alert("No feasible route (battery constraints).");
        return;
    }
    drawRoute(route, batteryPercent);
    let totalDistance = getTotalDistance(route);
    document.getElementById("distance").innerText = totalDistance;
    console.log("Loaded stations:", stations);
    console.log("Route:", route);
}


init();