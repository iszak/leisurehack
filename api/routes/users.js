var express = require('express');

module.exports = (db, passport) => {
  var router = express.Router();

  router.post('/update', (req, res, next) => {

    db.user.findOne({ where: {'id': req.user} }).then(function(user) {
      console.log(user);

      user.update(req.body).then(user => {
        res.status(201);
        res.send(user);
      }, error => {
        res.status(400);
        res.send(error.errors);
      });

    });

  });

  return router;
}
