var fs = require('fs');
var MongoClient = require('mongodb').MongoClient;
 
var test = JSON.parse(fs.readFileSync('test/test-data.json'));
// Connection URL
var url = 'mongodb://localhost:27017/myproject';
 
module.exports = {
    'load': function(done) {
        MongoClient.connect(url, function(err, db) {
          if(err) return done(err);
          var collection = db.collection('documents');
          collection.drop(function(err, result) {
            if(err) console.log('drop: ' + err);
            collection = db.collection('documents');
            var tarray = test.data;
            collection.insert(tarray, function(err, result) {
              if(err) return done(err);
              db.close();
              done();
            });
          });
        });
      },
      'getAll': function(done) {
        MongoClient.connect(url, function(err, db) {
          if(err) return done(err);
          var collection = db.collection('documents');
          collection.find({}).toArray(function(err, docs) {
            if(err) return done(err);
            done('', docs);
          });
        });
      }
  };