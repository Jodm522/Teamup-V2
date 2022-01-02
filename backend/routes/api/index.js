// backend/routes/api/index.js
const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const genresRouter = require("./genres.js");
const platformsRouter = require("./platforms.js");
const playtypesRouter = require("./playtypes.js");
const gamesRouter = require("./games.js");
const sessionsRouter = require("./sessions.js");
const profilesRouter = require("./profiles.js");
const ratingsRouter = require("./ratings.js");
router.post("/test", function (req, res) {
  res.json({ requestBody: req.body });
});
router.use("/sessions", sessionsRouter);
router.use("/games", gamesRouter);
router.use("/genres", genresRouter);
router.use("/platforms", platformsRouter);
router.use("/session", sessionRouter);
router.use("/users", usersRouter);
router.use("/playtypes", playtypesRouter);
router.use("/profiles", profilesRouter);
router.use("/ratings", ratingsRouter);

module.exports = router;
