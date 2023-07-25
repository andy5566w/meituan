const express = require("express");

const goods = require("./json/goods.json");
const rating = require("./json/rating.json");
const seller = require("./json/seller.json");

const app = express();
app.use(express.json());

app.use("/api/v1/goods", (req, res) => {
  res.status(200).json({ satus: "success", data: goods });
});

app.use("/api/v1/rating", (req, res) => {
  res.status(200).json({ satus: "success", data: rating });
});

app.use("/api/v1/seller", (req, res) => {
  res.status(200).json({ satus: "success", data: seller });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("listening port is " + PORT);
});
