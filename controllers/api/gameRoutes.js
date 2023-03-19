const router = require("express").Router();
const { Game, Golfer, Hole } = require("../../models");
const withAuth = require("../../utils/auth");

// Delete a game
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const gameData = await Game.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!gameData) {
      res.status(404).json({ message: "No game found with this id!" });
      return;
    }

    res.status(200).json(gameData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
