const Task = require("../models/task.js");

async function deleteTask(req, res) {
  const { id } = req.params;
  try {
    const deletedTask = await Task.findByIdAndDelete(id);
    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    return res
      .status(200)
      .json({ message: "Task deleted successfully", deletedTask });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error deleting task", error: error.message });
  }
}

module.exports = deleteTask;
