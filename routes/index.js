// const db = require('../db');

module.exports = {
   homePage: (req, res) => {
      req.app.locals.render(req, res, 'index.ejs', {
         // title: 'Jewish Women\'s Wills'
      });
   }
};