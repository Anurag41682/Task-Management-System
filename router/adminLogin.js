const express = require("express");
const adminLogin = express.Router();
const verifyAdminLogin = require("../controllers/adminLogin.js");
adminLogin.post("/adminLogin", verifyAdminLogin);

module.exports = adminLogin;
