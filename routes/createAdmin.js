const express = require("express");
const createAdminController = require("../controllers/createAdmin.js");
const createAdmin = express.Router();

createAdmin.post("/createAdmin", createAdminController);

module.exports = createAdmin;
