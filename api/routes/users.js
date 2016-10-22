var express = require('express');
var router = express.Router();


router.post('/update', (req, res, next) => {
  
  User.findOne({ where: {'id': req.user} }).then(function(user) {
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

module.exports = router;
