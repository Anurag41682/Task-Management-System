const AdminSchema = require("../models/admin.js");
const isAdminCreated = async (req, res) => {
  try {
    const adminCount = await AdminSchema.countDocuments({});
    if (adminCount >= 1) {
      return res.json(true);
    } else {
      return res.json(false);
    }
  } catch (error) {
    console.error("Error checking for admin:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = isAdminCreated;
