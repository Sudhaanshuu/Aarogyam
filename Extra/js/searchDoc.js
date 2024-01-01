function searchDoctors() {

    const cityInput = document.getElementById("cityInput").value;

    let doctorLocations;

    if (cityInput.toLowerCase() === "bhubaneswar") {
        doctorLocations = [
            { name: "Doctor A", lat: 20.1, lng: 85.1 },
            { name: "Doctor B", lat: 20.2, lng: 85.2 },
            { name: "Clinic C", lat: 20.3, lng: 85.3 }
        ];
    } else if (cityInput.toLowerCase() === "mumbai") {
        doctorLocations = [
            { name: "Doctor X", lat: 19.1, lng: 72.1 },
            { name: "Doctor Y", lat: 19.2, lng: 72.2 },
            { name: "Clinic Z", lat: 19.3, lng: 72.3 }
        ];
    } else {
        doctorLocations = [];
    }

    const locationInfo = document.getElementById("locationInfo");
    locationInfo.textContent = cityInput;

    const mapContainer = document.getElementById("map");

    const map = L.map('map');

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    if (doctorLocations.length > 0) {

        const bounds = doctorLocations.reduce((bounds, loc) => {
            return bounds.extend([loc.lat, loc.lng]);
        }, new L.LatLngBounds());

        map.fitBounds(bounds);

        doctorLocations.forEach(location => {
            L.marker([location.lat, location.lng])
                .addTo(map)
                .bindPopup(location.name);
        });

    } else {
        alert("No locations found");
    }

}