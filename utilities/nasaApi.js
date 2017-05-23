var api = {
  getRovers(){
    var url = `https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=cBkrL91JoxwwGvFyrJxFtmxzYFRbPeaBHJy273oz`
    return fetch(url).then((res) => res.json());
  }
}

module.exports = api;
