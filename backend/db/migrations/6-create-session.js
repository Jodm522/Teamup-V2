"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Sessions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Users" },
      },
      playtypeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Playtypes" },
      },
      platformId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Platforms" },
      },
      gameId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Games"},
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      text: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Sessions");
  },
};
