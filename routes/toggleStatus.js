const express = require("express");
const toggleStatusController = require("../controllers/toggleStatus.js");
const toggleStatus = express.Router();
const auth = require("../controllers/auth.js");
toggleStatus.patch("/toggleStatus/:id", auth, toggleStatusController);
module.exports = toggleStatus;
