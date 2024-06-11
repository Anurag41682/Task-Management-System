const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const auth = require("./routes/auth.js");
const isAdminCreated = require("./routes/isAdminCreated.js");
const adminLogin = require("./routes/adminLogin.js");
const addTask = require("./routes/addTask.js");
const fetchTask = require("./routes/fetchTask.js");
const deleteTask = require("./routes/deleteTask.js");
const editTask = require("./routes/editTask.js");
const fetchUser = require("./routes/fetchUsers.js");
const userLogin = require("./routes/userLogin.js");

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
app.use("/", userLogin);

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
