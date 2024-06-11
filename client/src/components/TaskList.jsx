import React from "react";

function TaskList({ tasks }) {
  if (!tasks || tasks.length === 0) {
    return <div>No tasks available</div>;
  }

  return (
    <div className="taskList">
      <h2>Task List</h2>
      <ul className="unorderedList">
        {tasks.map((task) => (
          <li className="singleList" key={task._id}>
            <h3>{task.title}</h3>
            <p>Description: {task.description}</p>
            <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
            <p>Priority: {task.priority}</p>
            <p>Assigned To: {task.assignedTo}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
