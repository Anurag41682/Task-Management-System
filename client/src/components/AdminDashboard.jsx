import React, { useEffect, useState } from "react";
import AddUser from "./AddUser";
import CreateTask from "./CreateTask";
import TaskList from "./TaskList";
import Modal from "react-modal";
import * as api from "../api/index";

Modal.setAppElement("#root"); // Set the root element for accessibility

function AdminDashboard() {
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
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    api.fetchTask().then((recieved) => {
      console.log(recieved);
      setTasks(recieved.data.tasks);
    });
  }, []);

  return (
    <div>
      <div className="firstAndSecond">
        <div onClick={openModal1} className="buttonSmall">
          Add User
        </div>
        <div onClick={openModal2} className="buttonSmall">
          Create Task
        </div>
      </div>
      <AddUser closeModal1={closeModal1} modal1IsOpen={modal1IsOpen} />
      <CreateTask
        setTasks={setTasks}
        tasks={tasks}
        closeModal2={closeModal2}
        modal2IsOpen={modal2IsOpen}
      />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default AdminDashboard;
