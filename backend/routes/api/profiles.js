const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const { User } = require("../../db/models");
const { Op } = require("sequelize");






router.get("/:id", asyncHandler(async function(req,res){
   
    const id = req.params.id;
    let profile = await User.findOne({ where:{id:id}})
    res.json(profile)
}))
module.exports = router
