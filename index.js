const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const auth = require("./router/auth.js");
const isAdminCreated = require("./router/isAdminCreated.js");
const adminLogin = require("./router/adminLogin.js");
const addTask = require("./router/addTask.js");
const fetchTask = require("./router/fetchTask.js");
const deleteTask = require("./router/deleteTask.js");
const editTask = require("./router/editTask.js");
const fetchUser = require("./router/fetchUsers.js");

const app = express();

//global middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// specific middlewares
app.use("/", auth);
app.use("/", isAdminCreated);
app.use("/", adminLogin);
app.use("/", addTask);
app.use("/", fetchTask);
app.use("/", deleteTask);
app.use("/", editTask);
app.use("/", fetchUser);

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
