const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello Express Server");
});
app.get("/hello", (req, res) => {
  res.send("Hello my /Hello");
});
app.get("/hi/:name", (req, res) => {
  res.send("Hello " + req.params.name);
});
app.get("/hi2/:name/:age", (req, res) => {
  const name = req.params.name;
  const age = req.params.age;

  res.send("Hi " + name + " age = " + age);
});
app.post("/myPost", (req, res) => {
  res.send("Hello POST Method");
});
app.post("/myInput", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;

  res.send(name + ", " + age);
});

app.listen(3000, () => {
  console.log("Express Server Running on localhost:3000");
});
