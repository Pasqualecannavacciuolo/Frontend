function showPosition(position) {
    console.log("Lat: " + position.coords.latitude);
    console.log("Long: " + position.coords.longitude);
    //console.log("Speed: " + posizione.coords.speed);

    document.getElementById('alt').innerHTML = "Altitudine: " + position.coords.latitude;
    document.getElementById('long').innerHTML = "Longitudine: " + position.coords.longitude;
}

//navigator.geolocation.getCurrentPosition;

if (navigator.geolocation) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition,
            null, {
                enableHighAccuracy: true,
                maximumAge: 60000,
                timeout: 1000
            }
        );
    }
}