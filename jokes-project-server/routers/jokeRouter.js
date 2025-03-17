const express = require("express");
const { getJokes, addJoke, deleteJoke } = require("../controllers/jokeController");

const router = express.Router();

// Define routes
router.get("/", getJokes);
router.post("/", addJoke);
router.delete("/:id", deleteJoke);

module.exports = router;
