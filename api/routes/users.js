var express = require('express');

module.exports = (db, passport) => {
  var router = express.Router();

  router.post('/update', (req, res, next) => {
    db.user.findOne({ where: {'id': req.user} }).then(user => {
      console.log(user);

      user.update(req.body).then(user => {
        res.status(201);
        res.send(user.toJSON());
      }, error => {
        res.status(400);
        res.send(error.errors);
      });
    }, next);
  });

  return router;
}
