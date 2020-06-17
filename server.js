var express = require('express'),
    path = require('path'), 
    bodyParser = require('body-parser'),
    cors = require('cors');

// Create global app object
var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/build')));

// Env setup
require('dotenv').config();
var isProduction = process.env.NODE_ENV === 'production';
if(!('DB_HOST' in process.env) || !('DB_USER' in process.env) 
    || !('DB_PASS' in process.env) || !('DB_NAME' in process.env) ) {
  throw 'Missing credential file. Add .env file to your directory.'
}

// End point setup
app.use(require('./routes'));

// Error handlers
if(!isProduction) {
  app.use(function(err, req, res, next) {
    console.log(err.stack);
    res.status(err.status || 500);
    res.json({'errors': {
      message: err.message,
      error: err
    }});
  });
}

app.use(function(err, req, res, next) {
  // Remove trace stack on production server
  res.status(err.status || 500);
  res.json({'errors': {
    message: err.message,
    error: {}
  }});
});

// Start Server
var server = app.listen( process.env.PORT || 3001, function(){
  console.log(`Listening on port ${server.address().port}`);
});
