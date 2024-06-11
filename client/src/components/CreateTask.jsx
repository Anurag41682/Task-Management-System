import Modal from "react-modal";
import { useState } from "react";
import * as api from "../api/index";
function CreateTask({ setTasks, tasks, closeModal2, modal2IsOpen }) {
  const initialState = {
    title: "",
    dueDate: "",
    description: "",
    priority: "medium",
    assignedTo: "none",
  };
  const [errorMessage, setErrorMessage] = useState(null);
  const [formData, setFormData] = useState(initialState);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    api
      .addTask(formData)
      .then((recieved) => {
        setTasks([...tasks, recieved.data.task]);
        setErrorMessage(null);
        closeModal2();
      })
      .catch((err) => {
        setErrorMessage("Fill Form Fully!");
      });
  };
  return (
    <Modal
      isOpen={modal2IsOpen}
      onRequestClose={closeModal2}
      contentLabel="Modal 2"
    >
      <div className="createTask">
        <h2>Create Task</h2>
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
            <label>Assigned To :</label>
            <select
              onChange={handleChange}
              value={formData.assignedTo}
              name="assignedTo"
            >
              <option value="none">none</option>
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
export default CreateTask;
