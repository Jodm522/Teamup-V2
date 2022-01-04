const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const { Application } = require("../../db/models");
const { Op } = require("sequelize");

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  let applications = await Application.findAll({
    where: { sessionid: id },
    include: [{ all: true }],
  });

  res.json(applications);
});
module.exports = router;
