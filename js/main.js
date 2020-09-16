function initGoogleMap() {
  const mapDiv = document.querySelector('#map');

  // Creating the Google Map
  new google.maps.Map(mapDiv, {
    center: { lat: 49.1963334, lng: -122.7991537 },
    zoom: 16,
  });
}
