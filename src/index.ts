import express from "express";
import mW from "./routes/router";
const app = express();
const port = 3000;
app.get("/first", mW, (req, res) => {
  res.send({
    first: "بسم الله الرحمن الرحيم",
    "You're ": "at the first route",
  });
});

app.get("/second", mW, (req, res) => {
  res.json({
    first: "بسم الله الرحمن الرحيم",
    "You're ": "at the second route",
  });
});

app.get("/third", mW, (req, res) => {
  res.json({
    first: "بسم الله الرحمن الرحيم",
    "You're ": "at the second third",
  });
});
// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
