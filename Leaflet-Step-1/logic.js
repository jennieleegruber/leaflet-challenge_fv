// myMap centered on the middle of the US
var myMap = L.map("map", {
    center: [39.8283, -98.5795],
    zoom: 4
  });
  
  // Adding street map layer to myMap
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(myMap);

  //  Create a variable pointing to the earthquake geojson data
  var quakesData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson";
  // Creating a variable to store each earthquake in the data as a cicle of varying color and size
  var quakeCircles;

  // using D3 to request data from the geojson
  d3.json(quakesData, function(data) {

  // creating a variable to store depth of eathquake, ie the 3rd geometric coordinate
  var depth = [];
  depth.forEach(chooseColor)
  
  // creating a fuction that choose the color of the cirlce based on the depth of the earthquake
  function chooseColor(depth) {
    switch (depth) {
    case data.features.geometry.coordinates[2]>=90:
      return "purple";
    case data.features.geometry.coordinates[2]>=70:
      return "red";
    case data.features.geometry.coordinates[2]>=50:
      return "orange";
    case data.features.geometry.coordinates[2]>=30:
      return "yellow";
    case data.features.geometry.coordinates[2]>=10:
      return "light green";
    default:
      return "green"; 
    }
  };

  // function for turning information about each earthquake into a circle on the map
  quakeCircles = L.cirlce([(data.features.geometry.coordinates[0]), (data.feature.geometry.coordinates[1])], {
        color: chooseColor(depth),
        fillColor: "red",
        fillOpacity: 0.75,
        radius: data.features[i].properties.mag
      }).addTo(myMap);
  }); 



