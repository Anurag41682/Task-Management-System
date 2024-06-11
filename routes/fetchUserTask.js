const express = require("express");
const fetchUserTaskController = require("../controllers/fetchUserTask.js");
const fetchUserTask = express.Router();
fetchUserTask.get("/fetchUserTask/:username", fetchUserTaskController);

module.exports = fetchUserTask;
