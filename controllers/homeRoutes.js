const router = require('express').Router();
const { Game, Golfer, Hole} = require('../models');
const withAuth = require('../utils/auth');

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
  
      res.render('profile', {
        ...golfer,
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
      res.render('chart', {
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;