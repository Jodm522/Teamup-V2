const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const { User_groups_link, Chat_group } = require("../../db/models");
const { Op } = require("sequelize");


// get all groups user is in
router.get("/:id", async (req, res) => {
  const id = req.params.id;

  let groups = await User_groups_link.findAll({
    where: { userid: id },
    include: [{ all: true }],
  });
  res.json(groups);
});

// add user to a group

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { userId, groupId } = req.body;
    const createdGroup = await User_groups_link.create({
      userid: userId,
      groupid: groupId,
    });
    return res.json({ createdGroup });
  })
);
module.exports = router;
