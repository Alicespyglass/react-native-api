var mapsAPI = {
  getPizza() {
    var url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&keyword=cruise&key=AIzaSyByFVMWrXcFmDawtZV1tqvn0fAXgVZe-DY`
    return fetch(url).then((res) => res.json());
  }
}

module.exports = mapsAPI;
