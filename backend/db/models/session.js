"use strict";
module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define("Session", {
    title: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    playtypeId: DataTypes.INTEGER,
    platformId: DataTypes.INTEGER,
    gameId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    text: DataTypes.TEXT,
    maxPlayers: DataTypes.INTEGER,
    currentPlayers: DataTypes.INTEGER,
    acceptedPlayers: DataTypes.JSON,
  });
  Session.associate = function (models) {
    Session.belongsTo(models.User, { foreignKey: "userId" });
    Session.belongsTo(models.Game, { foreignKey: "gameId" });
    Session.belongsTo(models.Playtype, { foreignKey: "playtypeId" });
    Session.belongsTo(models.Platform, { foreignKey: "platformId" });
  };
  // Session.make = async function ({
  //   title,
  //   genre1,
  //   genre2,
  //   genre3,
  //   url,
  //   description,
  // }) {
  //   const session = await Session.create({
  //     title,
  //     genre1,
  //     genre2,
  //     genre3,
  //     url,
  //     description,
  //   });
  // };
  return Session;
};
