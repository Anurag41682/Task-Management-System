const express = require("express");
const editTaskController = require("../controllers/editTask.js");
const editTask = express.Router();
editTask.patch("/editTask/:id", editTaskController);
module.exports = editTask;
