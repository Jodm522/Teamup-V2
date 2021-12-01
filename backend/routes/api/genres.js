const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const { Genre, Game } = require("../../db/models");
const { Op } = require("sequelize");

router.get(
  "/:id",
  asyncHandler(async function (req, res) {
    const id = req.params.id;
    console.log("IN API /:ID");
    const genre = await Genre.findByPk(id);
    const games = await Game.findAll({where: { [Op.or]: [{ genre1: id }, { genre2: id },{genre3:id}] }
}

      )
      // console.log(games)
     res.json([genre, games]);
  })
);

router.get(
  "/",
  asyncHandler(async function (req, res) {
    const genresList = await Genre.findAll();
    return res.json(genresList);
  })
);


module.exports = router;
