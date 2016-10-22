const express = require('express');
const router = express.Router();

const Team = require('../models/index').team
const TeamInvite = require('../models/index').team_invite

router.post('/', (req, res, next) => {
  Team.create(req.body).then(team => {
    res.status(201);
    res.send(team);
  }, error => {
    res.status(400);
    res.send(error.errors);
  })
});

router.post('/:teamId/invite', (req, res, next) => {
  Team.findById(req.params.teamId).then(team => {
    if (!team) {
      res.status(404);
      res.send({
        errors: ['Team not found']
      });
    } else {
      TeamInvite.create({
        email: req.body.email,
        mobile: req.body.mobile,
      }).then(teamInvite => {
        res.status(201);
        res.send(teamInvite);
      }, error => {
        res.status(400);
        res.send(error.errors);
      })
    }
  }).catch(next)
});


module.exports = router;
