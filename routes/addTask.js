const express = require("express");
const addTask = express.Router();
const addTaskController = require("../controllers/addTask.js");

addTask.post("/addTask", addTaskController);

module.exports = addTask;
