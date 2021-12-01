const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const { Platform } = require("../../db/models");

router.get(
  "/",
  asyncHandler(async function (req, res) {
    const platformsList = await Platform.findAll();
    return res.json(platformsList);
  })
);

router.get(
  "/:id",
  asyncHandler(async function (req, res) {
    const id = req.params.id;
    const platform = await Platform.findByPk(id);
    res.json(platform);
  })
);
module.exports = router;
