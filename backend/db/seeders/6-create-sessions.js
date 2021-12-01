"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Sessions",
      [
        {
          title: "My DnD oneshot",
          userId: 1,
          playtypeId: 3,
          platformId: 3,
          gameId: 1,
          date: new Date(2021, 6, 20),
          text: "My curse of strahd game",
        },
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
