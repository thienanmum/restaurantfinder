var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

var users = require('./controllers/users.controller');
var search = require('./controllers/search.controller');

var app = express();
mongoose.connect('mongodb://localhost:27017/restaurantfinder');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/users', users);
app.use('restaurant/search', search);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
    console.log(err);

    // send the error
    res.status(err.status || 500).json(err);
});

module.exports = app;
