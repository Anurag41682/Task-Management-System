const TaskSchema = require("../models/task.js");
async function addTask(req, res) {
  try {
    const newTask = new TaskSchema({
      title: req.body.title,
      dueDate: req.body.dueDate,
      description: req.body.description,
      status: req.body.status,
      priority: req.body.priority,
      assignedTo: req.body.assignedTo,
    });
    const savedTask = await newTask.save();
    return res
      .status(200)
      .json({ message: "Task successfully added", task: savedTask });
  } catch (err) {
    return res.status(500).json({ message: "Error saving task", error: err });
  }
}

module.exports = addTask;
