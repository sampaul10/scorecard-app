const router = require('express').Router();
const { Hole } = require('../../models');

router.post('/', async (req, res) => {
    try {
      const newHole = await Hole.create({
        ...req.body,
        user_id: req.session.game_id,
      });
  
      res.status(200).json(newHole);
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;