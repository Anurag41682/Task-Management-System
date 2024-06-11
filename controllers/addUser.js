const userSchema = require("../models/user.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
async function addUser(req, res) {
  try {
    const { username, password, confirmPassword } = req.body;

    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Check if username already exists
    const existingAdmin = await userSchema.findOne({ username });
    if (existingAdmin) {
      return res.status(400).json({ message: "Username already taken" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = new userSchema({
      username,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();
    const token = jwt.sign(
      {
        username: newUser.username,
        isAdmin: true,
      },
      "secretKey",
      {
        expiresIn: "1h",
      }
    );
    res.status(201).json({ token, message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}

module.exports = addUser;
