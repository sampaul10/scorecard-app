const Golfer = require('./Golfer');
const Game = require('./Game');
const Hole = require('./Hole');

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
Hole.belongsTo(Game, {
  foreignKey: 'game_id',
})

// Game hasMany hole
Game.hasMany(Hole, {
  foreignKey: 'game_id',
})

module.exports = {
  Golfer,
  Game,
  Hole,
};
