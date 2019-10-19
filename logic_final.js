var myMap = L.map("map", {
    center: [39.8283, -98.5759],
    zoom: 4.5
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: "pk.eyJ1IjoicGhpbG5vdHQiLCJhIjoiY2swcmZleGVqMDRodDNsbzJhampyaGxxMCJ9.TAnBMRuy0uu6-d7PcYvL3Q"
}).addTo(myMap);

var url = "nuforc_reports_2017";

d3.csv(url, function(response) {

    console.log(response);

    var heatArray = [];

    for (var i = 0; i < response.length; i++) {
        row = response[i];
        heatArray.push([row.city_lattitude, row.city_longitude]);
    }

    var heat = L.heatLayer(heatArray, {
        radius: 20,
        blur: 35
    }).addTo(myMap);

});