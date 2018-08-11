const express = require('express');
const path    = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser  = require('body-parser');
const jwt = require('jsonwebtoken');
var flash = require('connect-flash');
const passport =  require('passport');
const localStrategy = require('passport-local').Strategy;
const app = express();

 // ENV setup
require('./config');
const appConfig = require('./config/config'); 

  
//App configuration  and middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session(appConfig.expressSession));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
// passport auth
require('./config/passport')(passport, localStrategy);


// Static / public path 
app.use(express.static('dist'))
 
// Router setup 
 
require('./server/router/')(app, passport, localStrategy, jwt); 

// Catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('404 Page Not Found');
    err.status = 404;
    next(err);
  });
  
  // Error handler
  app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    res.status(err.status || 500).json({ error: err.message });
  });
// app listen
const port = process.env.PORT || 3000;
app.listen(port);