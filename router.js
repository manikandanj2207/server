const Authentication = require('./controllers/authentication');

module.exports = function(app){

    /*
    app.get('/', function(req, res, next){

      // req : request
      // res : response
      // next : for error handling

    res.send(['waterbottle','phone','paper']);
    */
    app.post('/signup', Authentication.signup);
  };
