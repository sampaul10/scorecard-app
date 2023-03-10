const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Hole extends Model {}

Hole.init(
  {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }, 
    hole_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },  
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    game_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'game',
            key: 'id',
      },
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'hole',
  }
);

module.exports = Hole;
