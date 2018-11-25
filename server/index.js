var express = require('express');
var bodyParser = require('body-parser');
var items = require('../database-mongo/index.js');
var mongoose = require('mongoose');
var youtube = require('./youtube');

var app = express();

app.use(bodyParser.json())
app.use(express.static(__dirname + '/../react-client/dist'));


app.post('/items', function (req, res) {
  let url = req.body.search;

  items.selectAll(url, function (data) {
    items.Item.find({}).exec(function (err, data) {
      if (data) {
        res.send(data);
        console.log('from DB', data);
      } else {
        youtube.getVideoByUrl(url, function (data) {
          items.save({
            url: url,
            info: data
          });
          console.log('saved data from post API: -', data)
          res.send(data.items);
        });
      }
    })
  })
});



app.get('/items', function (req, res) {

  items.Item.find({}).exec(
    function (err, data) {
      var comment = data[0].info.items[0].statistics.viewCount;
      var favoriteCount = data[0].info.items[0].statistics.favoriteCount;
      var dislikeCount = data[0].info.items[0].statistics.dislikeCount;
      var likeCount = data[0].info.items[0].statistics.likeCount;

      res.send(comment);

    })
});

app.listen(3000, function () {
  console.log('listening on port 3000!');
});