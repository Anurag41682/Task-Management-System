import Modal from "react-modal";
import { useEffect, useState } from "react";
import * as api from "../api/index";
function Edit({ allUser, modal2IsOpen, closeModal2, task, setTasks, tasks }) {
  const [errorMessage, setErrorMessage] = useState(null);
  const initialState = {
    title: "",
    dueDate: "",
    description: "",
    status: "",
    priority: "",
    assignedTo: "",
  };
  const [formData, setFormData] = useState(initialState);
  useEffect(() => {
    setFormData({
      title: task.title,
      dueDate: task.dueDate?.split("T")[0],
      description: task.description,
      status: task.status,
      priority: task.priority,
      assignedTo: task.assignedTo,
    });
  }, [task]);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    api
      .editTask(task._id, formData)
      .then((recieved) => {
        const updatedTasks = tasks.map((tsk) => {
          return tsk._id == task._id ? recieved.data : tsk;
        });
        setTasks(updatedTasks);
        setFormData(initialState);
        setErrorMessage(null);
        closeModal2();
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage("Fill Form Fully!");
      });
  };
  return (
    <Modal
      isOpen={modal2IsOpen}
      onRequestClose={closeModal2}
      contentLabel="Modal 2"
      style={{
        content: {
          backgroundColor: "#cdc7ff",
        },
      }}
    >
      <div className="createTask">
        <h2>Edit Task</h2>
        <form>
          <div className="createTaskInput">
            <label>Title :</label>
            <input
              onChange={handleChange}
              value={formData.title}
              name="title"
            ></input>
          </div>
          <div className="createTaskInput">
            <label>Due Date :</label>
            <input
              onChange={handleChange}
              value={formData.dueDate}
              name="dueDate"
              type="date"
            ></input>
          </div>
          <div className="createTaskInput">
            <label>Description :</label>
            <textarea
              onChange={handleChange}
              value={formData.description}
              name="description"
              id=""
            ></textarea>
          </div>
          <div className="createTaskInput">
            <label>Status :</label>
            <select
              onChange={handleChange}
              value={formData.status}
              name="status"
            >
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div className="createTaskInput">
            <label>Priority :</label>
            <select
              onChange={handleChange}
              value={formData.priority}
              name="priority"
              id="selection"
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          <div className="createTaskInput">
            <label>Assign To :</label>
            <select
              onChange={handleChange}
              value={formData.assignedTo}
              name="assignedTo"
            >
              <option value="None">None</option>
              {allUser?.map((user) => (
                <option key={user} value={user}>
                  {user}
                </option>
              ))}
            </select>
          </div>
        </form>
        <div className="buttonSmall" onClick={handleSubmit}>
          Submit
        </div>
        {errorMessage && <div className="error">{errorMessage}</div>}
      </div>
    </Modal>
  );
}

export default Edit;
