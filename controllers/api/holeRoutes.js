const router = require('express').Router();
const { Hole, Golfer, Game } = require('../../models');

router.post('/', async (req, res) => {
    try {
      const newHole = await Hole.create({
        score: req.body
      });
  
      res.status(200).json(newHole);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.put('/:id', async (req, res) => {
    console.log(req.body);
    console.log(req.session)
    console.log(req.body)
      try {
          const newScore = await Hole.update({
            score: req.body.score
          },
          { where: {
            game_id: req.params.id,
            hole_number: 7
          }
          });
     
        res.status(200).json(newScore);
      } catch (err) {
        console.log(err)
        res.status(400).json(err);
      }
    });

module.exports = router;