/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   26 April 2020
; Modified By: Diandra McKenzie
; Description: Configuring the server for a RESTful security service.
;===========================================
*/

// start program

//require

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');


var indexRouter = require('./routes/index');
var apiCatalog = require('./routes/api-catalog');



var app = express();

// MongoDB compass connection
var mongoDB = 'mongodb+srv://admin:admin2020@cluster-1-6d0ag.mongodb.net';
//create connection
mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    promiseLibrary: require('bluebird')
})
.then ( () => console.log('connection successful'))
.catch( (err) => console.error(err));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//use statements
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
  extended: false 
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ 
  extended: false
 }));


app.use('/', indexRouter);
app.use('/api', apiCatalog);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

//end program
