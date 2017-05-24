var api = {
  getRovers(){
    // var url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&keyword=cruise&key=AIzaSyByFVMWrXcFmDawtZV1tqvn0fAXgVZe-DY`

    var params = {
        location: "-33.8670522,151.1957362",
        radius: "500",
        type: "restaurant",
        keyword: "cruise",
        key: 'AIzaSyByFVMWrXcFmDawtZV1tqvn0fAXgVZe-DY'
    };

    var esc = encodeURIComponent;
    var query = Object.keys(params)
        .map(k => esc(k) + '=' + esc(params[k]))
        .join('&');

    var url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?" + query

    return fetch(url).then((res) => res.json());
  }
}

module.exports = api;
