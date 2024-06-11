const express = require("express");
const createAdmin = require("../controllers/createAdmin.js");
const addUser = require("../controllers/addUser.js");
const auth = express.Router();

auth.post("/createAdmin", createAdmin);
auth.post("/addUser", addUser);
module.exports = auth;
