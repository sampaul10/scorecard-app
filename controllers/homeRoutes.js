const router = require('express').Router();
const { Game, Golfer, Hole} = require('../models');
const withAuth = require('../utils/auth');
const sequelize = require('../config/connection');

//Homepage with login page
router.get('/', async (req, res) => {
    try {
      res.render('login');
    } catch (err) {
      res.status(500).json(err);
    }
  });

// Use withAuth middleware to prevent access to route
// ADD withAuth
router.get('/profile', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const golferData = await Golfer.findByPk(req.session.golfer_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Game }],
      });
  
      const golfer = golferData.get({ plain: true });
      
      console.log(golfer);

      res.render('profile', {
        golfer,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/scorecard', withAuth, async (req, res) => {
    try {
      res.render('scorecard', {
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/chart', withAuth, async (req, res) => {
    try {
      const gameData = await Game.findAll({
        include: [{model: Hole}],
        attributes: {
          include: [
            [
              sequelize.literal(
                //'(SELECT SUM(score), date_played FROM game GROUP BY date_played FROM hole WHERE hole.game_id = game.id)'
                '(SELECT SUM(score) FROM hole WHERE hole.game_id = game.id)'
              ),
              'totalScore',
            ],
          ],
        },
    });

      let game = gameData.map((game) => game.get({ plain: true }));

      game = JSON.stringify(game);

      console.log(game);

      res.render('chart', {
        game,
        logged_in: true
      });

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });


module.exports = router;