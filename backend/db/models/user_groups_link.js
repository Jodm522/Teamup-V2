"use strict";
module.exports = (sequelize, DataTypes) => {
  const User_groups_link = sequelize.define(
    "User_groups_link",
    {
      userid: DataTypes.INTEGER,
      groupid: DataTypes.INTEGER,
    },
    {}
  );
  User_groups_link.associate = function (models) {
    User_groups_link.belongsTo(models.Chat_group, { foreignKey: "groupid" });
    User_groups_link.belongsTo(models.User, { foreignKey: "userid" });
  };

  return User_groups_link;
};
