import {validateIp, addTileLayer, getAdress, addOffset} from './helpers'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import icon from '../images/icon-location.svg'
import { LatLng } from 'leaflet'

const ipInput = document.querySelector('.search-bar__input')
const btn = document.querySelector('.search-bar__btn')

const ipInfo = document.querySelector('#ip')
const locationInfo = document.querySelector('#location')
const timezoneInfo = document.querySelector('#timezone')
const ispInfo = document.querySelector('#isp')


btn.addEventListener('click', getData);
ipInput.addEventListener('keydown', handleKey);

const markerIcon = L.icon({
    iconUrl: icon,
    iconSize: [30, 40],
})

const mapArea = document.querySelector('.map')
const map = L.map(mapArea, {
    center: [51.505, -0.09],
    zoom: 13,
    zoomControl: false
})
addTileLayer(map)
L.marker([51.505, -0.09], {icon: markerIcon}).addTo(map)

function getData() {
    if (validateIp(ipInput.value)) {
        getAdress(ipInput.value)
            .then(setInfo)
    }
}

function handleKey(e) {
    if (e.key === 'Enter') {
        getData()
    }
}

function setInfo(mapData) {
    ipInfo.innerText = mapData.query;
    locationInfo.innerText = mapData.country + ' ' + mapData.region;
    timezoneInfo.innerText = mapData.timezone;
    ispInfo.innerText = mapData.isp;
    map.setView([mapData.lat, mapData.lon])
    L.marker([mapData.lat, mapData.lon], {icon: markerIcon}).addTo(map)

    if (matchMedia("(max-width: 1023px)").matches) {
        addOffset(map)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    getAdress('102.22.22.1').then(setInfo)
})