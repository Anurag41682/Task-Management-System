import Modal from "react-modal";
import { useState } from "react";
function CreateTask({ closeModal2, modal2IsOpen }) {
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
            <input name="title"></input>
          </div>
          <div className="createTaskInput">
            <label>Due Date :</label>
            <input type="date"></input>
          </div>
          <div className="createTaskInput">
            <label>Description :</label>
            <textarea name="description" id=""></textarea>
          </div>
          <div className="createTaskInput">
            <label>Priority :</label>
            <select name="selection" id="selection">
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
          <div className="createTaskInput">
            <label>Assigned To :</label>
            <select>
              <option value="none">none</option>
            </select>
          </div>
        </form>
        <div className="buttonSmall" onClick={closeModal2}>
          Submit
        </div>
      </div>
    </Modal>
  );
}
export default CreateTask;
