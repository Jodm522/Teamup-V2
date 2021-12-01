"use strict";
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define(
    "Game",
    {
      title: DataTypes.STRING,
      genre1: DataTypes.INTEGER,
      genre2: DataTypes.INTEGER,
      genre3: DataTypes.INTEGER,
      url: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {}
  );
  Game.associate = function (models) {
    Game.hasMany(models.Session, {
      foreignKey: "gameId",
      onDelete: "CASCADE",
      hooks: true,
    });
    Game.belongsTo(models.Genre, { foreignKey: "genre1" });

    Game.belongsTo(models.Genre, { foreignKey: "genre2" });

    Game.belongsTo(models.Genre, { foreignKey: "genre3" });
  };

  Game.make = async function ({
    title,
    genre1,
    genre2,
    genre3,
    url,
    description,
  }) {
    const game = await Game.create({
      title,
      genre1,
      genre2,
      genre3,
      url,
      description,
    });
  };

  return Game;
};
