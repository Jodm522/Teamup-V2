const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const {Playtype} = require("../../db/models");

router.get(
    "/",
    asyncHandler(async function(req,res){
        const platformsList = await Playtype.findAll()
        return res.json(platformsList)
    })
    )
    router.get(
      "/:id",
      asyncHandler(async function (req, res) {
        const id = req.params.id;
        const playtype = await Playtype.findByPk(id);
        res.json(playtype);
      })
    );


    module.exports = router;
