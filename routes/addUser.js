const express = require("express");
const addUserController = require("../controllers/addUser.js");
const addUser = express.Router();

addUser.post("/addUser", addUserController);
module.exports = addUser;
