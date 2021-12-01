"use strict";
module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define(
    "Genre",
    {
      genre: {
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
  Genre.associate = function (models) {
   Genre.hasMany(models.Game, {
     foreignKey: "genre1",
     onDelete: "CASCADE",
     hooks: true,
   });
   Genre.hasMany(models.Game, {
     foreignKey: "genre2",
     onDelete: "CASCADE",
     hooks: true,
   });
   Genre.hasMany(models.Game, {
     foreignKey: "genre3",
     onDelete: "CASCADE",
     hooks: true,
   });
  };
  return Genre;
};
