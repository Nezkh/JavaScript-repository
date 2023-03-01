function initMap(){
    // console.log("Inicializando mapa")
    const position ={
        lat: 35.5090627,
        lng: 139.2093841
    }

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 2.2,
        center: position
    })

    const labels = "ABC"
    
    const markers = locations.map((position, i) => {
        const label = labels[i & labels.length]
        const marker = new google.maps.Marker({
            position,
            label,
            map
        })
        marker.addListener("click", () => {
            infoWindow.setContent(label)
            infoWindow.open(map, marker);
          });
          return marker;
    })
   
    new MarkerClusterer({markers, map})
}

const locations = [
    {lat: 35.5090627, lng: 139.2093841},
    {lat: 34.0061908, lng: -118.7189763},
    {lat: 21.0868803, lng: -86.9908955}
]

window.initMap = initMap