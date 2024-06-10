const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const auth = require("./router/auth.js");
const isAdminCreated = require("./router/isAdminCreated.js");
const adminLogin = require("./router/adminLogin.js");
const app = express();

//global middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// specific middlewares
app.use("/", auth);
app.use("/", isAdminCreated);
app.use("/", adminLogin);

const PORT = 3001;
const mongoURL = "mongodb://localhost:27017/TaskManager";

mongoose
  .connect(mongoURL)
  .then(() => {
    app.listen(PORT, () => {
      console.log("App is Listening");
    });
  })
  .catch((err) => {
    console.log(err);
  });
