
// création d'une map simple CRS
var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -4,
    center: L.latLng(539, 881),

});


// On ajoute une taille et on intègre la carte sous format png (mais la j'ai mis un svg)
var bounds = [[-26.5, -25], [1080, 1920]];
var image = L.imageOverlay('carte-du-monde-v2.svg', bounds).addTo(map);




// déclare le japon et on ajoute sur la map
var japon = L.latLng([500, 720]);
L.marker(japon).addTo(map);
map.setView([70, 120], 1);


var maya = L.latLng(739, 623);
var grec = L.latLng(400, 800);
var viking = L.latLng(700, 850);


var circle = L.circle([545, 880], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 120
}).addTo(map).bindPopup('<h2> Le cercle des montagnes Rampart');


// test

// var map = L.map('map').setView([48.86, 2.35], 11);

// L.Control.MyControl = L.Control.extend({
//     onAdd: function (map) {
//         var el = L.DomUtil.create('div', 'leaflet-bar my-control');

//         el.innerHTML = 'My Control';

//         return el;
//     },

//     onRemove: function (map) {
//         // Nothing to do here
//     }
// });

// L.control.myControl = function (opts) {
//     return new L.Control.MyControl(opts);
// }

// L.control.myControl({
//     position: 'topright'
// }).addTo(map);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);




L.marker(japon).addTo(map).bindPopup('<h2>Japon</h2>');
L.marker(maya).addTo(map).bindPopup('<h2>Maya</h2>');
L.marker(grec).addTo(map).bindPopup('<h2>Grec</h2>');
L.marker(viking).addTo(map).bindPopup('<h2>Viking</h2>');

var travel = L.polyline([japon, viking]).addTo(map);

map.on('click', function (e) {
    alert(e.latlng);
});

map.fitBounds(bounds);


