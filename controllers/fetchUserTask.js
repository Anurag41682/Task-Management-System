const Task = require("../models/task.js");

async function fetchUserTask(req, res) {
  const { username } = req.params;

  try {
    const tasks = await Task.find({ assignedTo: username }).exec();
    if (!tasks.length) {
      return res.status(404).json({ message: "No tasks found for this user" });
    }
    return res.status(200).json(tasks);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Error fetching tasks", error: err.message });
  }
}

module.exports = fetchUserTask;
