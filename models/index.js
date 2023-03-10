const Golfer = require('./golfer');
const Game = require('./game');
const Hole = require('./hole');

// Game belongsTo Golfer
Game.belongsTo(Golfer, {
  foreignKey: 'golfer_id',
})

// Golfer hasMany Games
Golfer.hasMany(Game, {
  foreignKey: 'golfer_id',
  onDelete: 'CASCADE',
})

// hole belongsTo game
Hole.belongsToMany(Game, {
  through: GameHole,
  foreignKey: 'product_id',
})

// Game hasMany hole
Game.belongsTo(Hole, {
  through: GameHole,
  foreignKey: 'game_id',
})

module.exports = {
  Golfer,
  Game,
  Hole,
};
