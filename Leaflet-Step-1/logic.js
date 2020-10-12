// Creating our initial map object
// We set the longitude, latitude, and the starting zoom level
// This gets inserted into the div with an id of 'map'



function MarkerSize(mag){
    return mag * 10; 
}

var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

d3.json(url);


  
  // Adding a tile layer (the background map image) to our map
  // We use the addTo method to add objects to our map





var earthquakeMarkers = [];

// d3.json(url, function(data) {
var earthquakes = for (var i = 0; i < data.features.length; i++){
    earthquakeMarkers.push(
    L.circle (data.features[i].geometry.coordinates, {
        stroke:false, 
        fillOpacity: 0.75, 
        color:"white",
        fillColor: "white",
        radius: MarkerSize(data.features[0].properties.mag)
}))};

var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
tileSize: 512,
maxZoom: 18,
zoomOffset: -1,
id: "mapbox/streets-v11",
accessToken: API_KEY
});

var myMap = L.map("map", {
    center: [40.8081, -96.6997],
    zoom: 2
    layers: [streetmap, earthquakeMarkers]
  });

L.control.layers(myMap, streetmap, earthquakes, {
    collapse: false
  }).addTo(myMap);


   

    // console.log(data.features[i].geometry.coordinates[0]);
    // console.log(data.features[i].geometry.coordinates[1]);
    // console.log(data.features[i].properties.mag);
    // console.log(data.features.length)

    // console.log(data.features.length)
    // }).addTo(myMap);


//   onEachFeature: function(feature, layer) {
//     layer.bindPopup("Coordinates: " + data.features[0].geometry.coordinates[0].geometry.coordinates[1] + "<br>Magnitude: <br>" +
//       "$" + feature.properties.MHI2016);
//   }
  
  
//   function createFeatures(earthquakeData) {
  
//     // Define a function we want to run once for each feature in the features array
//     // Give each feature a popup describing the place and time of the earthquake
//     function onEachFeature(feature, layer) {
//       layer.bindPopup("<h3>" + features.properties.place +
//         "</h3><hr><p>" + new Date(feature.properties.time) + "</p>");
//     }
  
//     // Create a GeoJSON layer containing the features array on the earthquakeData object
//     // Run the onEachFeature function once for each piece of data in the array
//     var earthquakes = L.geoJSON(earthquakeData, {
//       onEachFeature: onEachFeature
//     });
  
//     // Sending our earthquakes layer to the createMap function
//     createMap(earthquakes);
//   }
  
//   function createMap(earthquakes) {
  
//     // Define streetmap and darkmap layers
//     var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//       attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
//       tileSize: 512,
//       maxZoom: 18,
//       zoomOffset: -1,
//       id: "mapbox/streets-v11",
//       accessToken: API_KEY
//     });
  
//     var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//       attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//       maxZoom: 18,
//       id: "dark-v10",
//       accessToken: API_KEY
//     });
  
//     // Define a baseMaps object to hold our base layers
//     var baseMaps = {
//       "Street Map": streetmap,
//       "Dark Map": darkmap
//     };
  
//     // Create overlay object to hold our overlay layer
//     var overlayMaps = {
//       Earthquakes: earthquakes
//     };
  
//     // Create our map, giving it the streetmap and earthquakes layers to display on load
//     var myMap = L.map("map", {
//       center: [
//         37.09, -95.71
//       ],
//       zoom: 5,
//       layers: [streetmap, earthquakes]
//     });
  
//     // Create a layer control
//     // Pass in our baseMaps and overlayMaps
//     // Add the layer control to the map
//     L.control.layers(baseMaps, overlayMaps, {
//       collapsed: false
//     }).addTo(myMap);
//   }
  



  

  
// //   function markerSize(mag) {
// //     return mag * 40;
// //   }
  
// // //   var response = {
// // //       name: 
// // //       location: 
// // //       mag: 
// // //   }
// // for (var i = 0; i < response.length; i++){
// //     L.circle(response[i].geometry.coordinates[0][1]{
// //         fillOpacity: 0.75, 
// //         color: "white",
// //         fillColor: "red",
// //         radius: 500
// //     }).bindPopup("<h1>" + cities[i].name + "</h1> <hr> <h3>Population: " + cities[i].population + "</h3>").addTo(myMap);
// // };