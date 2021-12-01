"use strict";
module.exports = (sequelize, DataTypes) => {
  const Platform = sequelize.define(
    "Platform",
    {
      platform: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );
  Platform.associate = function (models) {
    Platform.hasMany(models.Session, {
      foreignKey: "platformId",
      onDelete: "CASCADE",
      hooks: true,
    });
  };
  return Platform;
};
