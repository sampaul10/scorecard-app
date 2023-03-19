const router = require('express').Router();
const { Game, Golfer, Hole} = require('../models');
const withAuth = require('../utils/auth');
const sequelize = require('../config/connection');

// Homepage with login page
router.get('/', async (req, res) => {
    try {
      res.render('login');
    } catch (err) {
      res.status(500).json(err);
    }
  });


// Use withAuth middleware to prevent access to route
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


// View new scorecard
router.get('/scorecard', withAuth, async (req, res) => {
    try {
      res.render('scorecard', {
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });


// View past scorecard
router.get('/scorecard/:id', async (req, res) => {
    try {
      const gameData = await Game.findByPk(req.params.id, {
        include: [{ model: Hole }],
      });
  
      const game = gameData.get({ plain: true });
  
      res.render('scorecard', {
        ...game,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
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
                '(SELECT SUM(score) FROM hole WHERE hole.game_id = game.id)'
              ),
              'totalScore',
            ],
          ],
        },
    });

      let game = gameData.map((game) => game.get({ plain: true }));

      game = JSON.stringify(game);

      res.render('chart', {
        game,
        logged_in: true
      });

    } catch (err) {
      res.status(500).json(err);
    }
  });

  //Create new game
// router.post('/', withAuth, async (req, res) => {
//   // console.log(req.body);
//     try {
//       const newGame = await Game.create({
//         ...req.body,
//         golfer_id: req.session.golfer_id,
        
//       });
//       for (let i = 1; i < 19; i++) {
//         await Hole.create({
//           hole_number: i,
//           score: 0,
//           game_id: newGame.id
//         })
//       }
//       console.log(newGame.id)
//       console.log(req.body)
//       console.log(req.session)
      
//       const round = await Game.findByPk(newGame.id,
//            { include: [{ model: Hole }],
//       });
      
//       const roundPlayed = round.get({ plain: true });
      
//       console.log(JSON.stringify(roundPlayed) );

//       res.render('scorecard', {
//         roundPlayed,
//         logged_in: true
//       });



//       // res.status(200).json(newGame);
//     } catch (err) {
//       console.log("game routes post error" + err)
//       res.status(400).json(err);
//     }
//   });

module.exports = router;