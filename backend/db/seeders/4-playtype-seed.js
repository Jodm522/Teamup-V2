"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Playtypes",
      [
        { playtype: "Casual", url: "https://imgur.com/pIlis41" },
        { playtype: "Competitive", url: "https://imgur.com/d5dvzho" },
        { playtype: "Team", url: "https://imgur.com/mPtGitn" },
      ],
      {}
    );
    /*
       Add altering commands here.
      Return a promise to correctly handle asynchronicity.
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
