// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express = require('express');        // call express
var app = express();                 // define our app using express
var bodyParser = require('body-parser');
var partials = require('express-partials');
var logger = require('morgan');


// configure Express
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(partials());
app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));


var port = process.env.PORT || 8080;        // set our port


app.route('/login')
    .get(function (req, res) {
        res.render('login.ejs');
    })
    .post(function (req, res) {
        console.log(req.body.account);
        res.send(`hello ${req.body.account}`);
    });


app.get('/', function (req, res) {
    res.render('index');
});

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Start on port ' + port);