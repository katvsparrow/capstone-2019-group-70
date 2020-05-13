const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

require('dotenv').config();
require('./routes/documentRoutes')(app);
require('./routes/userRoutes')(app);

if(!('DB_HOST' in process.env) || !('DB_USER' in process.env) 
    || !('DB_PASS' in process.env) || !('DB_NAME' in process.env) ) {
  throw 'Missing credential file. Add .env file to your directory.'
}


app.use(express.static(path.join(__dirname, 'client/build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});


const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}`));