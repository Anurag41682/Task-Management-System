const User = require("../models/user.js");

async function fetchUser(req, res) {
  try {
    const users = await User.find({}).exec();
    const arrayUsername = users.map((temp) => {
      return temp.username;
    });
    return res.status(200).json(arrayUsername);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Error fetching users", error: err.message });
  }
}

module.exports = fetchUser;
