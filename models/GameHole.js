const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class GameHole extends Model {}

GameHole.init(
  {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }, 
    game_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'game',
        key: 'id',
      },
    },
    hole_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'hole',
        key: 'id',
      },
    },  
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'game_hole',
  }
);

module.exports = GameHole;
