import React from "react";
import * as api from "../api/index";
import { useState } from "react";
import Detail from "./Detail";
import Edit from "./Edit";
function TaskList({ allUser, setTasks, tasks }) {
  if (!tasks || tasks.length === 0) {
    return <div className="noTaskHead">No tasks available</div>;
  }
  const [modal1IsOpen, setModal1IsOpen] = useState(false);
  const [modal2IsOpen, setModal2IsOpen] = useState(false);
  const openModal1 = () => {
    setModal1IsOpen(true);
  };
  const openModal2 = () => {
    setModal2IsOpen(true);
  };
  const closeModal1 = () => {
    setModal1IsOpen(false);
  };
  const closeModal2 = () => {
    setModal2IsOpen(false);
  };
  const [tsk, setTsk] = useState({});
  const handleDetailClick = (task) => {
    setTsk(task);
    openModal1();
  };
  const handleEditClick = (task) => {
    setTsk(task);
    openModal2();
  };
  const handleDelete = (id) => {
    api
      .deleteTask(id)
      .then(() => {
        const updatedTasks = tasks.filter((task) => task._id !== id);
        setTasks(updatedTasks);
      })
      .catch((err) => {});
  };
  const COLORS = {
    low: "#9fff80",
    medium: "#ffa366",
    high: "#ff8080",
  };
  return (
    <div className="taskList">
      <h1>Task List</h1>
      <ul className="unorderedList">
        {tasks.map((task) => (
          <li
            style={{ backgroundColor: COLORS[task.priority.toLowerCase()] }}
            className="singleList"
            key={task._id}
          >
            <h3>{task.title}</h3>
            <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
            <p>Priority: {task.priority}</p>
            <div className="deleteEdit">
              <div
                onClick={() => {
                  handleDetailClick(task);
                }}
                className="Btn"
              >
                Detail
              </div>
              <div
                onClick={() => {
                  handleDelete(task._id);
                }}
                className="Btn"
              >
                Delete
              </div>
              <div
                className="Btn"
                onClick={() => {
                  handleEditClick(task);
                }}
              >
                Edit
              </div>
            </div>
            <Detail
              modal1IsOpen={modal1IsOpen}
              closeModal1={closeModal1}
              task={tsk}
            />
            <Edit
              allUser={allUser}
              modal2IsOpen={modal2IsOpen}
              closeModal2={closeModal2}
              task={tsk}
              setTasks={setTasks}
              tasks={tasks}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
