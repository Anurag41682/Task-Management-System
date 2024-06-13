const express = require("express");
const addTask = express.Router();
const addTaskController = require("../controllers/addTask.js");
const auth = require("../controllers/auth.js");
addTask.post("/addTask", auth, addTaskController);

module.exports = addTask;
