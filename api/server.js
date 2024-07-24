const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const jwt = require("jsonwebtoken");

const key = "kobsecretkey_isthe_jwt";

app.use(fileUpload());
app.use("/uploads", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello Express Server");
});
app.post("/signIn", (req, res) => {
  try {
    const payload = {
      id: 100,
      name: "kob",
      age: 39,
    };
    const token = jwt.sign(payload, key, { expiresIn: "2d" });

    return res.send({ token: token });
  } catch (e) {
    return res.status(500).send({ error: e.message });
  }
});
app.get("/verify", (req, res) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAwLCJuYW1lIjoia29iIiwiYWdlIjozOSwiaWF0IjoxNzIxODI1NjI5LCJleHAiOjE3MjE5OTg0Mjl9.nSgksZ2Qyn0Hf-5bkujIKx6UOyPS7Xfg5gT30AlSQ8k";
  const payload = jwt.verify(token, key);

  return res.send({ payload: payload });
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
app.put("/myPut/:id", (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const age = req.body.age;

  res.send(id + ", " + name + ", " + age);
});
app.delete("/myDelete/:id", (req, res) => {
  const id = req.params.id;
  res.send("id = " + id);
});
app.post("/myUpload", (req, res) => {
  const img = req.files.img;

  if (img != undefined) {
    if (img != null) {
      try {
        img.mv("./uploads/" + img.name, (err) => {
          if (err) throw err;

          return res.send({ message: "success" });
        });
      } catch (e) {
        return res.status(500).send({ error: e.message });
      }
    }
  }
});

app.listen(3000, () => {
  console.log("Express Server Running on localhost:3000");
});
