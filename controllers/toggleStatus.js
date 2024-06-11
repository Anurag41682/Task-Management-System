const Task = require("../models/task.js");

async function toggleStatus(req, res) {
  const { id } = req.params;

  try {
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    task.status = task.status === "Pending" ? "Completed" : "Pending";

    await task.save();
    return res.status(200).json(task);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Error toggling task status", error: err.message });
  }
}

module.exports = toggleStatus;
