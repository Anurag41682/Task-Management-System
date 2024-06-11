const Task = require("../models/task.js");

const fetchTask = async (req, res) => {
  try {
    const tasks = await Task.find();
    return res
      .status(200)
      .json({ message: "Tasks fetched successfully", tasks });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Error fetching tasks", error: err });
  }
};

module.exports = fetchTask;
