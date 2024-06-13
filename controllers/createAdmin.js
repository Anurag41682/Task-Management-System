const AdminSchema = require("../models/admin.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
async function createAdmin(req, res) {
  try {
    const { username, password, confirmPassword } = req.body;

    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Check if username already exists
    const existingAdmin = await AdminSchema.findOne({ username });
    if (existingAdmin) {
      return res.status(400).json({ message: "Username already taken" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new admin
    const newAdmin = new AdminSchema({
      username,
      password: hashedPassword,
    });

    // Save the admin to the database
    await newAdmin.save();
    const token = jwt.sign(
      {
        username: newAdmin.username,
        isAdmin: true,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );
    res.status(201).json({ token, message: "Admin created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}

module.exports = createAdmin;
