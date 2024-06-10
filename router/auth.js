const express = require("express");
const createAdmin = require("../controllers/createAdmin.js");
const auth = express.Router();

auth.post("/createAdmin", createAdmin);

module.exports = auth;
