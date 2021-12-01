"use strict";
module.exports = (sequelize, DataTypes) => {
  const Playtype = sequelize.define(
    "Playtype",
    {
      playtype: { type: DataTypes.STRING, allowNull: false },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );
  Playtype.associate = function (models) {
    Playtype.hasMany(models.Session, {
      foreignKey: "playtypeId",
      onDelete: "CASCADE",
      hooks: true,
    });
  };
  return Playtype;
};
