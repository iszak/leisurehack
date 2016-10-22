var express = require('express');

module.exports = function(db, passport){
  var router = express.Router();

  router.post('/signup', passport.authenticate('local-signup', {
    // successRedirect : '/success', // redirect to the secure profile section
    // failureRedirect : '/fail', // redirect back to the signup page if there is an error
    failureFlash : false // allow flash messages
  }), (req, res) => {
    console.log(req.user)
    if (req.user) {
      res.status(201)
      res.send(req.user)
    } else {
      res.status(404)
    }
  });


  router.get('/success', (req, res, next) => {
    res.json({message: 'login success'});
  });


  router.get('/fail', (req, res, next) => {
    res.json({message: res.body});
  });


  return router;

}
