const express = require("express");
const fetchTask = express.Router();
const fetchTaskController = require("../controllers/fetchTask.js");

fetchTask.get("/fetchTask", fetchTaskController);

module.exports = fetchTask;
