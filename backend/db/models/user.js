"use strict";
const { Validator } = require("sequelize");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 30],
          isNotEmail(value) {
            if (Validator.isEmail(value)) {
              throw new Error("Cannot be an email.");
            }
          },
        },
      },
      bio: DataTypes.TEXT,
      profileImage: DataTypes.TEXT,
      bannerImage: DataTypes.TEXT,

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 256],
        },
      },
      hashedPassword: {
        type: DataTypes.STRING.BINARY,
        allowNull: false,
        validate: {
          len: [60, 60],
        },
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      defaultScope: {
        attributes: {
          exclude: ["hashedPassword", "email", "createdAt", "updatedAt"],
        },
      },
      scopes: {
        currentUser: {
          attributes: { exclude: ["hashedPassword"] },
        },
        loginUser: {
          attributes: {},
        },
      },
    }
  );
  User.associate = function (models) {
    User.hasMany(models.Session, {
      foreignKey: "userId",
      onDelete: "CASCADE",
      hooks: true,
    });
    User.hasMany(models.Rating, {
      foreignKey: "senderId",
      onDelete: "CASCADE",
      hooks: true,
    });
    User.hasMany(models.Rating, {
      foreignKey: "receivingId",
      onDelete: "CASCADE",
      hooks: true,
    });
    User.hasMany(models.User_groups_link, {
      foreignKey: "userid",
      onDelete: "CASCADE",
      hooks: true,
    });
    User.hasMany(models.Chat_texts, {
      foreignKey: "senderid",
      onDelete: "CASCADE",
      hooks: true,
    });
  };

  User.prototype.toSafeObject = function () {
    // remember, this cannot be an arrow function
    const { id, username, email } = this; // context will be the User instance
    return { id, username, email };
  };

  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };

  User.getCurrentUserById = async function (id) {
    return await User.scope("currentUser").findByPk(id);
  };

  User.login = async function ({ credential, password }) {
    const { Op } = require("sequelize");
    const user = await User.scope("loginUser").findOne({
      where: {
        [Op.or]: {
          username: credential,
          email: credential,
        },
      },
    });
    if (user && user.validatePassword(password)) {
      return await User.scope("currentUser").findByPk(user.id);
    }
  };

  User.signup = async function ({
    username,
    email,
    password,
    firstName,
    lastName,
  }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      username,
      email,
      hashedPassword,
      firstName,
      lastName,
    });
    return await User.scope("currentUser").findByPk(user.id);
  };

  return User;
};
