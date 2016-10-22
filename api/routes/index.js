var express = require('express');
var router = express.Router();
var passport = require('passport');


module.exports = function(){

  router.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

  return router;

}
