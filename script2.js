const params = new URLSearchParams(window.location.search);
const start = params.get("start");
const end = params.get("end");
const batteryPercent = parseFloat(params.get("battery"));

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
        return null;
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
async function DirectPossible(start, end, initialRange){
    let d = await getDistance(start,end);
    let result = d<=initialRange;
    return result;
}

//2. Else we go with A_Star Algorithm.
async function aStar(nodes, start, end, MAX_RANGE, initialRange){
    let n=nodes.length;
    let g=new Array(n).fill(Infinity);
    let f=new Array(n).fill(Infinity);
    let parent = new Array(n).fill(-1);
    let visited = new Map();

    let open = new PriorityQueue();
    g[start]=0;
    f[start]=await getDistance(start,end);
    open.add({node: start, f:f[start]});
    while(!open.isEmpty()){
        let current = open.remove().node;
        if(visited.has(current)) continue;
        visited.set(current,true);
        if(current === end) break;
        for(let i=0; i<n; i++){
            if(i===current) continue;
            let d = await getDistance(current, i);
            let max_possible_range = (current===start)?initialRange:MAX_RANGE;
            if(d>max_possible_range) continue;
            let new_g = g[current]+d;
            if(new_g < g[i]){
                g[i]=new_g;
                let h = await getDistance(i,end);
                f[i]=g[i]+h;
                parent[i]=current;
                open.add({node:i, f:f[i]});
            }
        }
    }
    let path=[];
    let cursor=end;
    while(cursor!==-1){
        path.push(nodes[cursor]);
        cursor=parent[cursor];
    }
    path.reverse();
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
        total += getDistance(route[i], route[i + 1]);
    }
    return total;
}

//starter function.
async function init(){
    let startloc = await getCoordinates(start);
    let endloc = await getCoordinates(end);
    let initialRange = MAX_RANGE*(batteryPercent/100);
    let route;
    if(await DirectPossible(startloc, endloc, initialRange)){
        route = [startloc, endloc];
    }
    else{
        let AllNodes=[startloc,...stations,endloc];
        route = await aStar(AllNodes, startloc, endloc, MAX_RANGE, initialRange);
    }
    if(!route){
        alert("No feasible route.");
        return;
    }
    drawRoute(route, batteryPercent);
    let totalDistance = getTotalDistance(route);
    document.getElementById("distance").innerText = totalDistance.toFixed(2);
    console.log("Loaded stations:", stations);
    console.log("Route:", route);
}
init();