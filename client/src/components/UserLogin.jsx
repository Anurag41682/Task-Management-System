import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as api from "../api/index";
function UserLogin() {
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
  const handleLogin = () => {
    api
      .userLogin(formData)
      .then((recieved) => {
        const token = recieved.data.token;
        localStorage.setItem("jwtToken", token);
        navigate("/userDashboard");
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(err.response.data.error);
      });
  };
  return (
    <div className="loginPage">
      <h1>Login as User</h1>
      <form className="loginForm">
        <div className="loginInput">
          <label>Username:</label>
          <input
            onChange={handleChange}
            name="username"
            value={formData.username}
            type="name"
            required
          />
        </div>
        <div className="loginInput">
          <label>Password:</label>
          <input
            onChange={handleChange}
            name="password"
            value={formData.password}
            type="password"
            required
          />
        </div>
        <div onClick={handleLogin} className="loginButton">
          Login
        </div>
      </form>
      {errorMessage && <div className="error">{errorMessage}</div>}
    </div>
  );
}
export default UserLogin;
