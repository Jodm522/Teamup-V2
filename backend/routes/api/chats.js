const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const { Chat_texts } = require("../../db/models");
const { Op } = require("sequelize");

// get all chats from group
router.get("/:id", async (req, res) => {
  const id = req.params.id;

  let chats = await Chat_texts.findAll({
    where: { togroup: id },
    include: [{ all: true }],
  });
  res.json(chats);
});

// add chat
router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { userId, groupId, chatText } = req.body;
    const newChat = await Chat_texts.create({
      senderid: userId,
      togroup: groupId,
      text: chatText,
    });
    return res.json({ newChat });
  })
);
module.exports = router;
