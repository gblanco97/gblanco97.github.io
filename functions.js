//manip button//
function briefTitle(){
    let selectedElement = document.getElementById("mainTitle");
    console.log(selectedElement);
    selectedElement.innerText = "Portfolio";
}

//time function//
function getTime() {
    let selectedElement = document.getElementById("time");
    console.log(selectedElement);
    selectedElement.innerText = new Date()
    }

//array function//
function happySort(happiness) {
    var happy = prompt('include something that makes you happy');
    happy = happy.toLowerCase();
    happyArray.push(happy);
    var sortedHappy = happyArray.sort();
    varhappyAsUL - sortedHappy.map(function (i) {
        return i
    })

    document.getElementById('happyList').innerHTML =
    '<li>' + happyAsUL.join('</li><li>') + '<li>'
}

function lastHappy(){
    index = happyArray.length - 1;
    document.getElementById("lasthappy").innerHTML = happyArray[index];
}

newArray = ["coffee", "sunshine", "snacks", "dogs"];

//map API//
function mapLoad(){
    var latLng = [41.789649, -87.599702]; //Define the lat long coordinate
  
    //set attribution and access key url
    var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
  
    //define 2-tile layer variables
    var streets = L.tileLayer(mbUrl, {
        id: 'mapbox/streets-v11',
        titleSize: 510,
        zoomOffset: -1,
        attribution: mbAttr}
        );

    var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr}),
    streets  = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr});
  
    //define map object
    var map = L.map('map', {
      center: latLng,
      zoom: 16,
      layers: [streets]
    });
  
//add tile layers to base layer object, add to map, add a marker with a pop-up
    var baseLayers = {
      "Grayscale": grayscale,
      "Streets": streets
    };
  
    L.control.layers(baseLayers).addTo(map);
  
    L.marker(latLng).addTo(map)
    .bindPopup("<b>UChicago<br>Campus</b>").openPopup();

//add a nifty event
    var popup = L.popup();
  
    function onMapClick(e) {
      popup
      .setLatLng(e.latlng)
      .setContent("You clicked the map at " + e.latlng.toString())
      .openOn(map);
    }
    map.on('click', onMapClick);
  }