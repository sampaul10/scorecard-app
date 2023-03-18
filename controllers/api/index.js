const router = require('express').Router();
const gameRoutes = require('./gameRoutes');
const golferRoutes = require('./golferRoutes');
const holeRoutes = require('./holeRoutes');

router.use('/games', gameRoutes);
router.use('/golfers', golferRoutes);
router.use('/holes', holeRoutes);

module.exports = router;
