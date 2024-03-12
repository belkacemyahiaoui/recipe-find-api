const express = require("express");
var cors = require('cors')
const recipesRouter = require("./controllers/recipes.controller");

// create and setup express app
const app = express();
app.use(cors());
app.use(express.json());

// register routes
app.get("/", (_, res) => {
  res.send("Hello World!");
});
app.use("/recipes", recipesRouter);

// start express server
app.listen(3000, () => {
  console.log(`Example app listening on port 3000`);
});
