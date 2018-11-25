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
  console.log('the url is ', url);
  youtube.getVideoByUrl(req.body.search, function (data) {
    console.log('saved data from post: -', data)
    res.send(items);
  });
});



app.get('/items', function (req, res) {
  items.selectAll(function (err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      console.log('data get : ', data);
      res.json(data);
    }
  });
});

app.listen(3000, function () {
  console.log('listening on port 3000!');
});