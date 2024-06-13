const Task = require("../models/task.js");

async function editTask(req, res) {
  const { id } = req.params;
  const formData = req.body;

  try {
    const updatedTask = await Task.findByIdAndUpdate(id, formData, {
      new: true,
      runValidators: true,
    });

    if (!updatedTask) {
      return res.status(404).send({ error: "Task not found" });
    }

    return res.status(200).send(updatedTask);
  } catch (err) {
    return res.status(500).send({ error: "Form data not valid" });
  }
}

module.exports = editTask;
