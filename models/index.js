const Golfer = require('./golfer');
const Game = require('./game');
const Hole = require('./hole');

// Golfer hasMany Games
Golfer.hasMany(Game, {
  foreignKey: 'golfer_id',
  onDelete: 'CASCADE',
})

// Game belongsTo Golfer
Game.belongsTo(Golfer, {
  foreignKey: 'golfer_id',
})

// Game hasMany hole
Game.hasMany(Hole, {
  foreignKey: 'game_id',
  onDelete: 'CASCADE',
})

// hole belongsTo game
Hole.belongsTo(Game, {
  foreignKey: 'game_id',
})

module.exports = {
  Golfer,
  Game,
  Hole,
};
