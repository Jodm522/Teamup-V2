'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Platforms",
      [
        { platform: "PC", url: "https://imgur.com/7b58nRY" },
        { platform: "Switch", url: "https://imgur.com/E2COj0n" },
        { platform: "Tabletop", url: "https://imgur.com/A1RZ1y0" },
        { platform: "Xbox 1", url: "https://imgur.com/EPC3axi" },
        { platform: "PS4", url: "https://imgur.com/SlqKJy8" },
        { platform: "PS5", url: "https://imgur.com/uN8H3GG" },
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
  }
};
