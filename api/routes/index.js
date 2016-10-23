var express = require('express');

module.exports = function(db, passport){
  var router = express.Router();

  router.post('/signup', passport.authenticate('local-signup', {
    failureFlash : false // allow flash messages
  }), (req, res) => {
    console.log(req.user)
    if (req.user) {
      res.status(201)
      res.send(req.user)
    } else {
      res.status(404)
      res.send()
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
