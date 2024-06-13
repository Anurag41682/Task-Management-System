const express = require("express");
const fetchUserTaskController = require("../controllers/fetchUserTask.js");
const fetchUserTask = express.Router();
const auth = require("../controllers/auth.js");
fetchUserTask.get("/fetchUserTask/:username", auth, fetchUserTaskController);

module.exports = fetchUserTask;
