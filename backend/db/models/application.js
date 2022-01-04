"use strict";
module.exports = (sequelize, DataTypes) => {
  const Application = sequelize.define(
    "Application",
    {
      applicantid: DataTypes.INTEGER,
      sessionid: DataTypes.INTEGER,
      text: DataTypes.TEXT,
      // createdAt: DataTypes.DATE,
      // updatedAt:DataTypes.DATE
    },
    {}
  );
  Application.associate = function (models) {
    Application.belongsTo(models.User, { foreignKey: "applicantid" });
    Application.belongsTo(models.Session, { foreignKey: "sessionid" });
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
  return Application;
};
