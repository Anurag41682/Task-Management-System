const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserSchema = require("../models/user.js");
async function adminLogin(req, res) {
  try {
    const { username, password } = req.body;
    const user = await UserSchema.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: "Invalid username or password" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid username or password" });
    }
    const token = jwt.sign(
      { username, isAdmin: false },
      process.env.SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );
    return res.json({ token });
  } catch (error) {
    console.error("Error logging in user:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
module.exports = adminLogin;
