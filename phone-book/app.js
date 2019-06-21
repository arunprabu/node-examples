var createError = require('http-errors'); 
var express = require('express');   ///express framework
var path = require('path');
var cookieParser = require('cookie-parser');  //to deal with cookies
var logger = require('morgan');  // logs some info
 
var indexRouter = require('./routes/index');  // getting template for index page 
var usersRouter = require('./routes/users'); // getting template for users page
var contactsRouter = require('./routes/contacts'); 

var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// when we hit home page indexRouter template will be served 
app.use('/', indexRouter);   //http://localhost:3000/
// when we hit users page usersRouter template will be served 
app.use('/users', usersRouter);   //http://localhost:3000/users

//API url
app.use('/api/contacts',  contactsRouter );

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
