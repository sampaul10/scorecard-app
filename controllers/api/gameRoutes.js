const router = require('express').Router();
const { Game, Golfer, Hole } = require('../../models');
const withAuth = require('../../utils/auth');

// Create new game
router.post('/', withAuth, async (req, res) => {
  try {
    const newGame = await Game.create({
      ...req.body,
      golfer_id: req.session.golfer_id,
    });
    for (let i = 1; i < 19; i++) {
      await Hole.create({
        hole_number: i,
        score: 0,
        game_id: newGame.id,
      });
    }

    res.status(200).json(newGame.id);
  } catch (err) {
    console.log('game routes post error' + err);
    res.status(400).json(err);
  }
});

// Delete a game
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const gameData = await Game.destroy({
      where: {
        id: req.params.id,
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
