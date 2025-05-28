const express = require("express");
const app = express();
const port = 7000;

app.use(express.static("public"));

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.listen(port, () => {
  console.log(`app working on port: ${port}`);
});
