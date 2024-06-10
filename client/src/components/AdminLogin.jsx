import { useState } from "react";
import * as api from "../api/index";
import { useNavigate } from "react-router-dom";
function AdminLogin() {
  const navigate = useNavigate();
  const initialState = {
    username: "",
    password: "",
  };
  const [errorMessage, setErrorMessage] = useState(null);
  const [formData, setFormData] = useState(initialState);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleClick = () => {
    console.log(formData);
    api
      .adminLogin(formData)
      .then((recieved) => {
        console.log(recieved);
        const token = recieved.data.token;
        localStorage.setItem("jwtToken", token);
        navigate("/adminDashboard");
      })
      .catch((err) => {
        setErrorMessage(err.response.data.error);
      });
  };
  return (
    <div className="loginPage">
      <h1>Login as Admin</h1>
      <form className="loginForm">
        <div className="loginInput">
          <label>Username:</label>
          <input
            onChange={handleChange}
            value={formData.username}
            name="username"
            type="name"
            required
          />
        </div>
        <div className="loginInput">
          <label>Password:</label>
          <input
            onChange={handleChange}
            value={formData.password}
            name="password"
            type="password"
            required
          />
        </div>
        <div onClick={handleClick} className="loginButton">
          Login
        </div>
      </form>
      {errorMessage && <div className="error">{errorMessage}</div>}
    </div>
  );
}
export default AdminLogin;
