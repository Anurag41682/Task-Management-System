const express = require("express");
const userLogin = express.Router();
const userLoginController = require("../controllers/userLogin");
userLogin.post("/userLogin", userLoginController);

module.exports = userLogin;
