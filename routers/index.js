const express = require("express");
const Controller = require("../controllers");
const router = express.Router();

router.get("/songs", Controller.getSongs);
router.get("/sortedSongs", Controller.getSortedSongs);
router.post("/songs", Controller.addSong);

module.exports = router;
