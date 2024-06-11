import React, { useEffect, useState } from "react";
import AddUser from "./AddUser";
import CreateTask from "./CreateTask";
import TaskList from "./TaskList";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import * as api from "../api/index";

Modal.setAppElement("#root"); // Set the root element for accessibility

function AdminDashboard() {
  const navigate = useNavigate();
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
  const [allUser, setAllUsers] = useState([]);
  useEffect(() => {
    api
      .fetchTask()
      .then((recieved) => {
        setTasks(recieved.data.tasks);
      })
      .catch((err) => {
        console.log(err);
      });
    api
      .fetchUser()
      .then((recieved) => {
        setAllUsers(recieved.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleLogOut = () => {
    localStorage.removeItem("jwtToken");
    navigate("/");
  };
  return (
    <div>
      <div className="firstAndSecond">
        <div onClick={openModal1} className="buttonSmall">
          Add User
        </div>
        <div onClick={openModal2} className="buttonSmall">
          Create Task
        </div>
        <div className="buttonSmall" onClick={handleLogOut}>
          LogOut
        </div>
      </div>
      <AddUser
        allUser={allUser}
        setAllUsers={setAllUsers}
        closeModal1={closeModal1}
        modal1IsOpen={modal1IsOpen}
      />
      <CreateTask
        allUser={allUser}
        setTasks={setTasks}
        tasks={tasks}
        closeModal2={closeModal2}
        modal2IsOpen={modal2IsOpen}
      />
      <TaskList allUser={allUser} setTasks={setTasks} tasks={tasks} />
    </div>
  );
}

export default AdminDashboard;
