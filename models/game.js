const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Game extends Model {}

Game.init(
  {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },   
    date_played: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    golfer_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'golfer',
            key: 'id',
      },
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'game',
  }
);

module.exports = Game;
