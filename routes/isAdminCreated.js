const express = require("express");
const AdminSchema = require("../models/admin.js");
const isAdminCreatedController = require("../controllers/isAdminCreated.js");
const isAdminCreated = express.Router();
isAdminCreated.get("/isAdminCreated", isAdminCreatedController);

module.exports = isAdminCreated;
