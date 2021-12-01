const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const { Game } = require("../../db/models");

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { title, genre1, genre2, genre3, url, description } = req.body;
    const game = await Game.make({
      title,
      genre1,
      genre2,
      genre3,
      url,
      description,
    });
    return res.json({
      game,
    });
  })
);

router.get(
  "/",
  asyncHandler(async function (req, res) {
    const gamesList = await Game.findAll();
    return res.json(gamesList);
  })
);

router.get("/:id",
asyncHandler(async function (req,res){
  const id = req.params.id
  const game = await Game.findByPk(id)
  res.json(game)
})
)
module.exports = router;
