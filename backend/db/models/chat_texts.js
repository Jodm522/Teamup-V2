"use strict";
module.exports = (sequelize, DataTypes) => {
  const Chat_texts = sequelize.define(
    "Chat_texts",
    {
      text: DataTypes.TEXT,
      senderid: DataTypes.INTEGER,
      togroup: DataTypes.INTEGER,
    },
    {}
  );
  Chat_texts.associate = function (models) {
    Chat_texts.belongsTo(models.Chat_group, { foreignKey: "togroup" });
    Chat_texts.belongsTo(models.User, { foreignKey: "senderid" });
  };

  return Chat_texts;
};
