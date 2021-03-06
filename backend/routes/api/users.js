const { singleMulterUpload, singlePublicFileUpload } = require("../../awsS3");

const express = require("express");
const asyncHandler = require("express-async-handler");

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User } = require("../../db/models");

const router = express.Router();

const validateSignup = [
  check("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("Please provide a valid email."),
  check("username")
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage("Please provide a username with at least 4 characters."),
  check("username").not().isEmail().withMessage("Username cannot be an email."),
  check("password")
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage("Password must be 6 characters or more."),
  handleValidationErrors,
];

// Sign up
router.post(
  "/",
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, password, username, firstName, lastName } = req.body;
    const user = await User.signup({
      email,
      username,
      password,
      firstName,
      lastName,
    });

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  })
);
// post image

router.post(
  "/profileimage/:id",
  singleMulterUpload("image"),
  asyncHandler(async (req, res) => {
    const id = req.params.id;

    // console.log("SADFASDF" + req.file);
    const profileImageUrl = await singlePublicFileUpload(req.file);
    const user = await User.update(
      { profileImage: profileImageUrl },
      { where: { id: id } }
    );

    return res.json({
      user,
    });
  })
);

router.post(
  "/bannerimage/:id",
  singleMulterUpload("image"),
  asyncHandler(async (req, res) => {
    const id = req.params.id;

    // console.log("SADFASDF" + req.file);
    const bannerImageUrl = await singlePublicFileUpload(req.file);
    const user = await User.update(
      { bannerImage: bannerImageUrl },
      { where: { id: id } }
    );

    return res.json({
      user,
    });
  })
);

module.exports = router;
