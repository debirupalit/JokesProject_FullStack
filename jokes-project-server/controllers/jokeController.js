const Joke = require("../models/Joke");

// Get all jokes
const getJokes = async (req, res) => {
  try {
    const jokes = await Joke.find();
    res.json(jokes);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server Error, failed to get jokes", error });
  }
};


module.exports = { getJokes };
