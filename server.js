const express = require('express');
const path = require('path');
const app = express();

require('dotenv').config();
require('./routes/documentRoutes')(app);

if(!('DB_HOST' in process.env) || !('DB_HOST' in process.env) 
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