const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const AdminSchema = require("../models/admin.js");
async function adminLogin(req, res) {
  try {
    const { username, password } = req.body;
    const admin = await AdminSchema.findOne({ username });
    console.log(admin);
    if (!admin) {
      return res.status(401).json({ error: "Invalid username or password" });
    }
    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid username or password" });
    }
    const token = jwt.sign({ username, isAdmin: true }, "secretKey", {
      expiresIn: "1h",
    });
    return res.json({ token });
  } catch (error) {
    console.error("Error logging in admin:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
module.exports = adminLogin;
