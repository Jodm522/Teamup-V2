const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const { User } = require("../../db/models");
const { Op } = require("sequelize");

router.get(
  "/:id",
  asyncHandler(async function (req, res) {
    const id = req.params.id;
    let profile = await User.findOne({ where: { id: id } });
    res.json(profile);
  })
);

router.post(
  `/multipleProfiles`,
  asyncHandler(async function (req, res) {
    let profilesArray = req.body;

    let profiles = await Promise.all(
      profilesArray.map(
        async (ele) => await User.findOne({ where: { id: ele } })
      )
    );

    res.json(profiles);
  })
);
module.exports = router;
