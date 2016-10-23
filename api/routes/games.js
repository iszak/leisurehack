const express = require('express');

module.exports = (db) => {
  const router = express.Router();

  const Team = db.team
  const Game = db.game


  router.get('/:gameId', (req, res, next) => {
    Game.findById(req.params.gameId).then(game => {
      if (!game) {
        res.status(404);
        res.send({errors: ['Game not found']});
      } else {
        const data = req.body

        res.status(200);
        res.send(game.toJSON());
      }
    })
  });


  router.post('/', (req, res, next) => {
    Team.findById(req.body.teamId).then(team => {
      if (!team) {
        res.status(404);
        res.send({errors: ['Team not found']});
      } else {
        const data = req.body
              data.teamId = team.id

        Game.create(data).then(game => {
          res.status(201);
          res.send(game.toJSON());
        }, error => {
          res.status(400);
          res.send(error.errors);
        })
      }
    })
  });

  return router
}
