const express = require('express');
const router = express.Router();

const Team = require('../models/index').team

router.post('/', (req, res, next) => {
  Team.create(req.body).then(team => {
    res.status(201);
    res.send(team);
  }, errors => {
    res.status(400);
    res.send(errors);
  })
});

module.exports = router;
