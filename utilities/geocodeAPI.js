// returns lat lng based on postcode / address

var geocodeAPI = {

  getAddress(){
    // var url = `https://maps.googleapis.com/maps/api/geocode/outputFormat?parameters`
    var endpoint = "https://maps.googleapis.com/maps/api/geocode/json?"
    var params = {
        address: "N1C 4AG",
        key: 'AIzaSyDhD9L-FTKWFeJFdaUf4ecYItoZtVIQI74'
    };

    var esc = encodeURIComponent;
    var query = Object.keys(params)
        .map(k => esc(k) + '=' + esc(params[k]))
        .join('&');

    var url = endpoint + query

    return fetch(url).then((res) => res.json());
  },

  getPlacesA(){
    // var url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&keyword=cruise&key=AIzaSyByFVMWrXcFmDawtZV1tqvn0fAXgVZe-DY`
    // Makers Academy

    var params = {
        location: "51.5174603,-0.0732902",
        radius: "500",
        type: "coffee",
        key: 'AIzaSyByFVMWrXcFmDawtZV1tqvn0fAXgVZe-DY'
    };

    var esc = encodeURIComponent;
    var query = Object.keys(params)
        .map(k => esc(k) + '=' + esc(params[k]))
        .join('&');

    var url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?" + query

    return fetch(url).then((res) => res.json());
  },

  getPlacesB(){
    // var url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&keyword=cruise&key=AIzaSyByFVMWrXcFmDawtZV1tqvn0fAXgVZe-DY`
    // Google Kings Cross

    var params = {
        location: "51.533355,-0.1254794",
        radius: "500",
        type: "coffee",
        key: 'AIzaSyByFVMWrXcFmDawtZV1tqvn0fAXgVZe-DY'
    };

    var esc = encodeURIComponent;
    var query = Object.keys(params)
        .map(k => esc(k) + '=' + esc(params[k]))
        .join('&');

    var url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?" + query

    return fetch(url).then((res) => res.json());
  },

  // placesOverlap(){

  // }


}

module.exports = geocodeAPI;
