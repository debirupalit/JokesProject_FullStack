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

// Add a new joke
const addJoke = async (req, res) => {
  try {
    // const { setup, punchline, type } = req.body;
    const newJoke = new Joke(req.body);
    await newJoke.save();
    res
      .status(201)
      .json(newJoke);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server Error, failed to add jokes", error });
  }
};

// Delete a joke
const deleteJoke = async (req, res) => {
  try {
    await Joke.findByIdAndDelete(req.params.id);
    res.json({ message: "Joke deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server Error, failed to delete jokes", error });
  }
};

module.exports = { getJokes, addJoke, deleteJoke };
