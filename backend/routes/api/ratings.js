const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const { Rating } = require("../../db/models");
const { Op } = require("sequelize");

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  
  let ratings = await Rating.findAll({
    where: { receivingId: id },
    include: [{ all: true }],
  });
  console.log(ratings);
  res.json(ratings);
});

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { fromUser, toUser, rating, comment } = req.body;
    console.log(fromUser, toUser, rating, comment);

    const check = await Rating.findOne({
      where: { receivingId: toUser } && { senderId: fromUser },
    });

    if (check) {
      const postedRating = await Rating.update(
        {
          senderId: fromUser,
          receivingId: toUser,
          rating,
          text: comment,
        },
        {
          where: { receivingId: toUser } && { senderId: fromUser },
        }
      );
    }

    if (!check) {
      const postedRating = await Rating.create({
        senderId: fromUser,
        receivingId: toUser,
        rating,
        text: comment,
      });
    }

    return res.json({ postedRating });
  })
);

module.exports = router;
