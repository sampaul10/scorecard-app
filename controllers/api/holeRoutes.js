const router = require('express').Router();
const { Hole, Golfer, Game } = require('../../models');

router.put('/:id', async (req, res) => {
    console.log(req.body)
    console.log("params" + req.params.id);
    console.log("session" + req.session)
      try {
          const newScore = await Hole.update({
            score: req.body.score
          },
          { where: {
            game_id: req.params.id,
            hole_number: 1
          }
          });
     
        res.status(200).json(newScore);
      } catch (err) {
        console.log("hole routes put error" + err)
        res.status(400).json(err);
      }
  });

module.exports = router;