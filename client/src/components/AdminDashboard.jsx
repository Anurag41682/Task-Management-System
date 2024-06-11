import React, { useState } from "react";
import AddUser from "./AddUser";
import CreateTask from "./CreateTask";
import Modal from "react-modal";

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
      <CreateTask closeModal2={closeModal2} modal2IsOpen={modal2IsOpen} />
    </div>
  );
}

export default AdminDashboard;
