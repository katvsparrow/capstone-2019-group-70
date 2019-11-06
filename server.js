const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const path = require('path');
// const session = require('express-session');

const db = require('./db');
const logger = require('./logger');

const route = {
   index: require('./routes/index')
};

const port = process.env.PORT || 3000;

const app = express();
app.set('port', port);
app.set('views', __dirname, '/views');
app.set('view engine', 'ejs');

app.set(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());

// session for maintaining login
// app.use(
//    session{(
//       secret: process.env.SESSION_SECRET || 'password',
//       store: db.sessionStore,
//       resave: false,
//       saveUninitialized: false
//    )}
// );

// keep this middleware at the end, add any other middleware above this
app.use((req, res, next) => {
   try {
      next();
   } catch (error) {
     req.app.locals.error(req, res, error);
   }
});

app.get('/', route.index.homePage);

app.listen(port, () => {
   console.log(`Server running on port ${port}`);
});
 