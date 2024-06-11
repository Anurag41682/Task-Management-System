import Modal from "react-modal";
import { useState } from "react";
import * as api from "../api/index";
function AddUser({ closeModal1, modal1IsOpen }) {
  const initialUserState = {
    username: "",
    password: "",
    confirmPassword: "",
  };
  const [errorMessage, setErrorMessage] = useState(null);
  const [addUserFormData, setAddUserFormData] = useState(initialUserState);
  const handleAddUserChange = (e) => {
    setAddUserFormData({ ...addUserFormData, [e.target.name]: e.target.value });
  };
  const handleAddUserSubmit = () => {
    api
      .addUser(addUserFormData)
      .then((received) => {
        closeModal1();
        setAddUserFormData(initialUserState);
        setErrorMessage(null);
      })
      .catch((err) => {
        setErrorMessage(err.response.data.message);
      });
  };
  return (
    <Modal
      isOpen={modal1IsOpen}
      onRequestClose={closeModal1}
      contentLabel="Modal 1"
      style={{
        content: {
          backgroundColor: "#cdc7ff",
        },
      }}
    >
      <div className="addUser">
        <h2>Add User</h2>
        <form>
          <div className="addUserInput">
            <label>Username :</label>
            <input
              onChange={handleAddUserChange}
              required
              value={addUserFormData.username}
              name="username"
            ></input>
          </div>
          <div className="addUserInput">
            <label>Password :</label>
            <input
              onChange={handleAddUserChange}
              value={addUserFormData.password}
              required
              name="password"
              type="password"
            ></input>
          </div>
          <div className="addUserInput">
            <label>Confirm Password :</label>
            <input
              onChange={handleAddUserChange}
              value={addUserFormData.confirmPassword}
              required
              name="confirmPassword"
              type="password"
            ></input>
          </div>
          <div className="buttonSmall" onClick={handleAddUserSubmit}>
            Submit
          </div>
        </form>
        {errorMessage && <div className="error">{errorMessage}</div>}
      </div>
    </Modal>
  );
}
export default AddUser;
