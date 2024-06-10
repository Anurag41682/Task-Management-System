import { useState } from "react";
import * as api from "../api/index";
import { useNavigate } from "react-router-dom";
function NewAdminPage() {
  const navigate = useNavigate();
  const initialState = {
    username: "",
    password: "",
    confirmPassword: "",
  };
  const [errorMessage, setErrorMessage] = useState(null);
  const [formData, setFormData] = useState(initialState);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleClick = async () => {
    console.log(formData);
    try {
      const recieved = await api.createAdmin(formData);
      const token = recieved.data.token;
      localStorage.setItem("jwtToken", token);
      console.log("Success");
      navigate("/");
    } catch (err) {
      setErrorMessage(err.response.data.message);
    }
  };
  return (
    <>
      <div className="adminPage">
        <h1>Create New Admin</h1>
        <form>
          <div className="adminInput">
            <label>Username : </label>
            <input
              name="username"
              value={formData.username}
              onChange={handleChange}
              type="name"
              required
            ></input>
          </div>
          <div className="adminInput">
            <label>Password :</label>
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              type="password"
              required
            />
          </div>
          <div className="adminInput">
            <label>Confirm Password :</label>
            <input
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              type="password"
              required
            />
          </div>
          <div className="createAdminButton" onClick={handleClick}>
            Create Admin
          </div>
        </form>
        {errorMessage && <div className="error">{errorMessage}</div>}
      </div>
    </>
  );
}
export default NewAdminPage;
