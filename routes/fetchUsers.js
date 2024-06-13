const express = require("express");
const fetchUserController = require("../controllers/fetchUser");
const fetchUser = express.Router();
const auth = require("../controllers/auth.js");
fetchUser.get("/getUser", auth, fetchUserController);

module.exports = fetchUser;
