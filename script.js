const params = new URLSearchParams(window.location.search);

const startLoc = params.get("start");
const destination = params.get("end");
const batteryPercent =  parseFloat(params.get("battery"));
var map = L.map('map').setView([26.5, 74.5],6);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

function distance(a,b){
    let dx = a.lat - b.lat;
    let dy = a.lon - b.lon;
    return Math.sqrt(dx*dx + dy*dy) * 111;
}
async function getCoordinates(place) {
    let res = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${place}&format=json`
    );
    let data = await res.json();
    if (data.length === 0) return null;
    return {
        name: place,
        lat: parseFloat(data[0].lat),
        lon: parseFloat(data[0].lon)
    };
}
function aStar(nodes, start, end, MAX_RANGE){
    let n = nodes.length;
    let g = new Array(n).fill(Infinity);
    let f = new Array(n).fill(Infinity);
    let parent = new Array(n).fill(-1);
    g[start] = 0;
    f[start] = distance(nodes[start], nodes[end]);
    let open = [];
    open.push({node: start, f: f[start]});
    while(open.length > 0){
        open.sort((a,b) => a.f - b.f);
        let current = open.shift().node;
        if(current === end) break;
        for(let i = 0; i < n; i++){
            if(i === current) continue;
            let d = distance(nodes[current], nodes[i]);
            if(d > MAX_RANGE) continue;
            let new_g = g[current] + d;
            if(new_g < g[i]){
                g[i] = new_g;
                let h = distance(nodes[i], nodes[end]);
                f[i] = new_g + h;
                parent[i] = current;

                open.push({node: i, f: f[i]});
            }
        }
    }
    let path = [];
    let cur = end;
    while(cur !== -1){
        path.push(nodes[cur]);
        cur = parent[cur];
    }
    path.reverse();
    return path;
}
async function drawRoute(route) {
    let fullPath = [];
    for (let i = 0; i < route.length - 1; i++) {
        let start = route[i];
        let end = route[i + 1];
        let url = `https://router.project-osrm.org/route/v1/driving/${start.lon},${start.lat};${end.lon},${end.lat}?overview=full&geometries=geojson`;
        let res = await fetch(url);
        let data = await res.json();
        if (data.routes.length > 0) {
            let coords = data.routes[0].geometry.coordinates;
            coords.forEach(c => fullPath.push([c[1], c[0]]));
        }
    }
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
            `${p.name || p.subtown || "Point"}`
        );
        let label = p.name || p.subtown || p.town || "Point";
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
function getTotalDistance(route) {
    let total = 0;
    for (let i = 0; i < route.length - 1; i++) {
        total += distance(route[i], route[i + 1]);
    }
    return total;
}
async function init() {
    let startNode = await getCoordinates(startLoc);
    let endNode = await getCoordinates(destination);
    if (!startNode || !endNode) {
        alert("Location not found!");
        return;
    }
    let allNodes = [startNode, ...stations, endNode];
    let MAX_RANGE = 400 * (batteryPercent / 100);
    let route = aStar(allNodes, 0, allNodes.length - 1, MAX_RANGE);
    if (!route || route.length === 0) {
        alert("Precharge to 100%");
        route = aStar(allNodes, 0, allNodes.length - 1, 400);
        if (!route || route.length === 0) {
            alert("No route possible even at 100% battery!");
            return;
        }
    }
    drawRoute(route);
    let totalDistance = getTotalDistance(route);
    document.getElementById("distance").innerText = totalDistance.toFixed(2);
    console.log("Loaded stations:", stations);
    console.log("Route:", route);
}

init();

