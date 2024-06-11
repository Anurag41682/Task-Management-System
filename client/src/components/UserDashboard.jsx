import { useNavigate } from "react-router-dom";
import TaskListUser from "./TaskListUser";
import { useState, useEffect } from "react";
import decodeFn from "../utils/decodeFn";
import * as api from "../api/index";
function UserDashboard() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const jwtToken = localStorage.getItem("jwtToken");
  const [userName, setUserName] = useState(null);
  useEffect(() => {
    const decodedToken = decodeFn(jwtToken);
    setUserName(decodedToken.username);
  }, []);
  useEffect(() => {
    if (userName)
      api
        .fetchUserTask(userName)
        .then((recieved) => {
          setTasks(recieved.data);
        })
        .catch((err) => {
          console.log(err);
        });
  }, [userName]);
  const handleLogOut = () => {
    localStorage.removeItem("jwtToken");
    navigate("/");
  };

  return (
    <div>
      <div className="firstAndSecond">
        <h2>{userName}</h2>
        <div className="buttonSmall" onClick={handleLogOut}>
          LogOut
        </div>
      </div>
      <TaskListUser setTasks={setTasks} tasks={tasks} />
    </div>
  );
}

export default UserDashboard;
