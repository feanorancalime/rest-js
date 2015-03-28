var express = require('express');
var http = require('http');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var router = require('./server/router');
var morgan = require('morgan');
 
app.use(bodyParser.urlencoded({extended: true}));
 
// parse application/json
app.use(bodyParser.json());
app.use(methodOverride()); // TODO: what does this do?
app.use(morgan('dev', { format: 'dev', immediate: true }));
app.use(router());

var mongoload = require('./server/mongoload');
mongoload.load(function (err) {
    if (err) {
        console.log('error loading data into mongo');
        return;
    }
    http.createServer(app).listen(9999, function() {
        console.log('Server up: http://localhost:' + 9999);
    });
});
 
