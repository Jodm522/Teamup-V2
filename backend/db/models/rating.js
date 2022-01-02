"use strict";
module.exports = (sequelize, DataTypes) => {
  const Rating = sequelize.define(
    "Rating",
    {
      senderId: DataTypes.INTEGER,
      receivingId: DataTypes.INTEGER,
      rating: DataTypes.INTEGER,
      text: DataTypes.TEXT,
      // createdAt: DataTypes.DATE,
      // updatedAt:DataTypes.DATE
    },
    {}
  );
  Rating.associate = function (models) {
    Rating.belongsTo(models.User, { foreignKey: "senderId" });
    // Rating.belongsTo(models.User, { foreignKey: "receivingId" });
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
  return Rating;
};
