require("dotenv").config();
// const dotenv = require("../dotenv");
const express = require("express");
const { connectDB } = require("./config/db");
const cors = require("cors");
const jokeRouter = require("./routers/jokeRouter");
const path = require("path");

// dotenv.config({});

/*Initialize Express App*/
const app = express();

/*Connect to MongoDB*/
// connectDB();

const _dirname = path.resolve();

/*Middleware*/
// app.use(cors());
app.use(cors({ credentials: true }));
app.use(express.json());

/*Routes*/
app.use("/api/jokes", jokeRouter);

// app.get("/", (req, res) => {
//   res.status(200).send("Welcome to the Jokes API! 🤣");
// });

app.use(express.static(path.join(_dirname, "/jokes-project-client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(_dirname, "jokes-project-client", "dist", "index.html"))
});

/*Start Server*/
const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running at ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Db connection failed : ", error);
  });
