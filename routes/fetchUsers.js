const express = require("express");
const fetchUserController = require("../controllers/fetchUser");
const fetchUser = express.Router();
fetchUser.get("/getUser", fetchUserController);

module.exports = fetchUser;
