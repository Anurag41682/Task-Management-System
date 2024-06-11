import { useState } from "react";
import Detail from "./Detail";
import * as api from "../api/index";
function TaskListUser({ setTasks, tasks }) {
  if (!tasks || tasks.length === 0) {
    return <div className="noTaskHead">No tasks available</div>;
  }
  const [modal1IsOpen, setModal1IsOpen] = useState(false);

  const COLORS = {
    low: "#9fff80",
    medium: "#ffa366",
    high: "#ff8080",
  };
  const openModal1 = () => {
    setModal1IsOpen(true);
  };
  const closeModal1 = () => {
    setModal1IsOpen(false);
  };

  const [tsk, setTsk] = useState({});

  const handleDetailClick = (task) => {
    setTsk(task);
    openModal1();
  };
  const handleToggleStatusClick = (task) => {
    setTsk(task);
    api
      .toggleStatus(task._id)
      .then((recieved) => {
        const updatedTask = tasks.map((tsk) => {
          return tsk._id == task._id ? recieved.data : tsk._id;
        });
        console.log(updatedTask);
        setTasks(updatedTask);
      })
      .catch(() => {});
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
                  handleToggleStatusClick(task);
                }}
                className="Btn"
              >
                Toggle Status
              </div>
            </div>

            <Detail
              modal1IsOpen={modal1IsOpen}
              closeModal1={closeModal1}
              task={tsk}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TaskListUser;
