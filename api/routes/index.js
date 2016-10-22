var express = require('express');
var router = express.Router();


module.exports = function(passport){

  router.post('/signup', (req, res, next) => {
    passport.authenticate('local-signup', {
          successRedirect : '/success', // redirect to the secure profile section
          failureRedirect : '/fail', // redirect back to the signup page if there is an error
          failureFlash : true // allow flash messages
      });
  });


  router.post('/success', (req, res, next) => {
    res.json({message: 'login success'});
  });


  router.post('/fail', (req, res, next) => {
    res.json(res.body);
  });


  return router;

}
