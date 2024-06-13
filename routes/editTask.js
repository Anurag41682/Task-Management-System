const express = require("express");
const editTaskController = require("../controllers/editTask.js");
const editTask = express.Router();
const auth = require("../controllers/auth.js");
editTask.patch("/editTask/:id", auth, editTaskController);
module.exports = editTask;
