const express = require("express");
const fetchTask = express.Router();
const fetchTaskController = require("../controllers/fetchTask.js");
const auth = require("../controllers/auth.js");
fetchTask.get("/fetchTask", auth, fetchTaskController);

module.exports = fetchTask;
