const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const port = process.env.PORT || 8080;

const about = require("./JSON/About.json");
const portfolio = require("./JSON/Portfolio.json");

app.get("/", (req, res) => {
  res.send("Amigo, funciona");
});

app.get("/portfolio", (req, res) => {
  res.json(portfolio);
});

app.listen(port, () => {
  console.log(`Server on : ${port}`);
});
