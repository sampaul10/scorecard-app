const router = require('express').Router();
const { Golfer } = require('../../models');

router.get('/', )

router.post('/', async (req, res) => {
    try {
      const golferData = await Golfer.create(req.body);
  
      req.session.save(() => {
        req.session.gofer_id = golferData.id;
        req.session.logged_in = true;
  
        res.status(200).json(golferData);
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.post('/login', async (req, res) => {
    try {
      const golferData = await Golfer.findOne({ where: { email: req.body.email } });
  
      if (!golferData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      const validPassword = await golferData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      req.session.save(() => {
        req.session.golfer_id = golferData.id;
        req.session.logged_in = true;
        
        res.json({ golfer: golferData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

  module.exports = router;