const router = require('express').Router();
const gameRoutes = require('./gameRoutes');
const golferRoutes = require('./golferRoutes');
const holeRoutes = require('./holeRoutes');
const GameHoleRoutes = require('./GameHoleRoutes');

router.use('/games', gameRoutes);
router.use('/golfers', golferRoutes);
router.use('/holes', holeRoutes);
router.use('/GameHoles', GameHoleRoutes);

module.exports = router;
