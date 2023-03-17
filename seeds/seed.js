const sequelize = require('../config/connection');
const { Golfer, Game, Hole} = require('../models');
const golferData = require('./golfer.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  const golfer = await Golfer.create(golferData, {
    individualHooks: true,
    returning: true,
  });
  console.log(golfer);
  for (let i = 1; i < 5; i++) {
    const newGameData = await Game.create({
      //date_played: "Mon, 25 Dec 1995 13:30:00 GMT",
      golfer_id: golfer.id,
    });
    for (let i = 1; i < 19; i++) {
        await Hole.create({
            hole_number: i,
            //score: 4,
            game_id: newGameData.id,
        })
    }
  }
  process.exit(0);
};
seedDatabase(); 