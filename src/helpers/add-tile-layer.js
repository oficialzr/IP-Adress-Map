import L from 'leaflet'

export function addTileLayer(map) {
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoib2ZpY2lhbHpyIiwiYSI6ImNsZ2d0ZWFxejBmMjEzZ282czBod3dvaGMifQ.np5OP_qBlsWrrwySIZtdBw', {
        attribution: 'Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a href="#">Your Name Here</a>.',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
    }).addTo(map)
}