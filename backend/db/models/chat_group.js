"use strict";
module.exports = (sequelize, DataTypes) => {
  const Chat_group = sequelize.define(
    "Chat_group",
    {
      title: DataTypes.TEXT,
      picture: DataTypes.TEXT,
    },
    {}
  );
  Chat_group.associate = function (models) {
    Chat_group.hasMany(models.Chat_texts, {
      foreignKey: "togroup",
      onDelete: "CASCADE",
      hooks: true,
    });
    Chat_group.hasMany(models.User_groups_link, {
      foreignKey: "groupid",
      onDelete: "CASCADE",
      hooks: true,
    });

  };

  return Chat_group;
};
