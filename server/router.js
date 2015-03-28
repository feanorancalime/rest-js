// REST methods:
// GET returns a list with optional filters
// GET :id returns a single document
// POST :id {doc} updates a single document
// PUT {doc} adds a single document
// DELETE :id deletes a single document
 
module.exports = function() {
  return function(req, res, next) {
    console.log("routing url " + req.url);
    if(req.method === 'GET') {
      res.status(200).send('GET processing on model ' + req.url + '\n');
    } else if(req.method === 'POST') {
      res.status(200).send('POST processing on model ' + req.url + '\n');
    } else if(req.method === 'PUT') {
      res.status(200).send('PUT processing on model ' + req.url + '\n');
    } else if(req.method === 'DELETE') {
      res.status(200).send('DELETE processing on model ' + req.url + '\n');
    } else {
      res.status(500).send('unrecognized verb');
    }
    res.end();
  };
};