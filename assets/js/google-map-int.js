function initMap() {
  var latlng = new google.maps.LatLng(30.668590, 76.739010); // Updated latitude and longitude
  var myOptions = {
      zoom: 12,
      center: latlng,
      styles: [
          // Your map styles array remains unchanged
          // Paste your existing styles here
      ]
  };

  var map = new google.maps.Map(document.getElementById("contact-map"), myOptions);

  var myMarker = new google.maps.Marker({
      position: latlng,
      map: map,
      title: "Shree Sainath Gas Pipe" // You can set a custom title for your marker
  });
}
