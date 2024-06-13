const express = require("express");
const deleteTask = express.Router();
const deleteController = require("../controllers/deleteTask.js");
const auth = require("../controllers/auth.js");
deleteTask.delete("/deleteTask/:id", auth, deleteController);

module.exports = deleteTask;
