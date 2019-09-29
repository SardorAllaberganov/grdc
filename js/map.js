function initMap() {
    var myLatLng = { lat: 41.3092175, lng: 69.271988 };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: myLatLng,
        disableDefaultUI: true
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
    });
    var myLatLng = { lat: 41.3092175, lng: 69.271988 };
    
    var map = new google.maps.Map(document.getElementById('map1'), {
        zoom: 15,
        center: myLatLng,
        disableDefaultUI: true
    });
    
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
    });
}