import React from "react";
import * as api from "../api/index";
function TaskList({ setTasks, tasks }) {
  if (!tasks || tasks.length === 0) {
    return <div>No tasks available</div>;
  }
  const handleDelete = (id) => {
    api
      .deleteTask(id)
      .then(() => {
        const updatedTasks = tasks.filter((task) => task._id !== id);
        setTasks(updatedTasks);
      })
      .catch((err) => {});
  };
  return (
    <div className="taskList">
      <h2>Task List</h2>
      <ul className="unorderedList">
        {tasks.map((task) => (
          <li className="singleList" key={task._id}>
            <h3>{task.title}</h3>
            {/* <p>Description: {task.description}</p> */}
            <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
            <p>Priority: {task.priority}</p>
            {/* <p>Assigned To: {task.assignedTo}</p> */}
            <div className="deleteEdit">
              <div className="Btn">Detail</div>
              <div
                onClick={() => {
                  handleDelete(task._id);
                }}
                className="Btn"
              >
                Delete
              </div>
              <div className="Btn">Edit</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
