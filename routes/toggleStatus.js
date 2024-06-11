const express = require("express");
const toggleStatusController = require("../controllers/toggleStatus.js");
const toggleStatus = express.Router();
toggleStatus.patch("/toggleStatus/:id", toggleStatusController);
module.exports = toggleStatus;
