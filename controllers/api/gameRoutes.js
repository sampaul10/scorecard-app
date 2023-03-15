const router = require('express').Router();
const { Game, Golfer} = require('../../models');
const withAuth = require('../../utils/auth');
// remember to add withAuth
router.post('/',  async (req, res) => {
    try {
      const newGame = await Game.create({
        ...req.body,
        golfer_id: req.session.golfer_id,
      });
  
      res.status(200).json(newGame);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  // remember to add withAUth
  router.delete('/:id',  async (req, res) => {
    try {
      const gameData = await Game.destroy({
        where: {
          id: req.params.id,
          golfer_id: req.session.golfer_id,
        },
      });
  
      if (!gameData) {
        res.status(404).json({ message: 'No game found with this id!' });
        return;
      }
  
      res.status(200).json(gameData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;