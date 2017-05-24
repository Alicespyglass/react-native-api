var geocodeAPI = {
  getAddress(){
    // var url = `https://maps.googleapis.com/maps/api/geocode/outputFormat?parameters`
    var endpoint = "https://maps.googleapis.com/maps/api/geocode/json?"
    var params = {
        address: "E16lt",
        key: 'AIzaSyDhD9L-FTKWFeJFdaUf4ecYItoZtVIQI74'
    };

    var esc = encodeURIComponent;
    var query = Object.keys(params)
        .map(k => esc(k) + '=' + esc(params[k]))
        .join('&');

    var url = endpoint + query

    return fetch(url).then((res) => res.json());
  }



}

module.exports = geocodeAPI;
