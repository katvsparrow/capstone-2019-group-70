const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');

const port = process.env.PORT || 3000;
const app = express();
app.set('port', port);
app.set('view engine', 'ejs');

app.get('*', function(req, res){
   res.status(200).render('index.ejs');
});

app.listen(port, () => {
   console.log(`Server running on port ${port}`);
});
 