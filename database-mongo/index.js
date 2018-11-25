var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
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

var selectAll = function (callback) {
  Item.find({}, function (err, items) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.save = save;
module.exports.selectAll = selectAll;