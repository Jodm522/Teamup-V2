"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Genres",
      [
        { genre: "Indie", url: "https://imgur.com/15kIGGI" },
        { genre: "Action", url: "https://imgur.com/p5Qx8e0" },
        { genre: "Adventure", url: "https://imgur.com/7gbm8IP" },
        { genre: "Simulation", url: "https://imgur.com/nw1NR4E" },
        { genre: "RPG", url: "https://imgur.com/SsOJHsJ" },
        { genre: "Tabletop", url: "https://imgur.com/tIJy2vA" },
        { genre: "Strategy", url: "https://imgur.com/IhQ4i02" },
        { genre: "MMO", url: "https://imgur.com/bCHUZiQ" },
        { genre: "Puzzle", url: "https://imgur.com/EaGE5lD" },
        { genre: "Racing", url: "https://imgur.com/AgD4eYU" },
        { genre: "FPS", url: "https://imgur.com/N7rJcAq" },
        { genre: "Story", url: "https://imgur.com/PP0JdAZ" },
        { genre: "Cards", url: "https://imgur.com/rsGE8x3" },
        { genre: "Co-op", url: "https://imgur.com/Gt3cwqA" },
        { genre: "Building", url: "https://imgur.com/sJBFaYf" },
        { genre: "Fighting", url: "https://imgur.com/h9z1PBR" },
      ],
      {}
    );
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:

    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
