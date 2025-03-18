const express = require("express");
const { getJokes } = require("../controllers/jokeController");

const router = express.Router();

// Define routes
router.get("/", getJokes);

module.exports = router;
