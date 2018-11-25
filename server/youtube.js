const request = require('request');
const config = require('./config.js');

let getVideoByUrl = (url, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API
  //
  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://www.googleapis.com/youtube/v3/videos?id=${url}&key=AIzaSyA2RE5lDoXQh3LSDiBkrJmAuOZrlwF3aGg&part=snippet,statistics`,
  };

  request.get(options, function (err, res, body) {
    console.log('---------', JSON.parse(body));
    callback(JSON.parse(body))
  })

}

module.exports.getVideoByUrl = getVideoByUrl;