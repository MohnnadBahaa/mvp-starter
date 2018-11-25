var mongoose = require('mongoose');
mongoose.connect('mongodb://testtwo:asd123@ds115874.mlab.com:15874/testone');
var db = mongoose.connection;
db.once('open', function () {
  console.log('mongoose connected successfully');
});


// database --------

var itemSchema = mongoose.Schema({
  url: String,
  info: Object
});

let Item = mongoose.model('Item', itemSchema);


let save = (data) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  let item = new Item(data);
  item.save(function (err, res) {
    if (err) {
      console.log('error in save', err);
    } else {
      console.log('result----- :', res);
      console.log("Data Saved!");
    }

  });
}



let selectAll = function (url, callback) {
  Item.find({
    url: url
  }, function (err, data) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};



module.exports.save = save;
module.exports.selectAll = selectAll;
module.exports.Item = Item;