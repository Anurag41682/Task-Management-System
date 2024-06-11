const express = require("express");
const deleteTask = express.Router();
const deleteController = require("../controllers/deleteTask.js");

deleteTask.delete("/deleteTask/:id", deleteController);

module.exports = deleteTask;
