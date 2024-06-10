import isAuth from "../utils/isAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function Root(props) {
  const navigate = useNavigate();
  const jwtToken = localStorage.getItem("jwtToken");
  useEffect(() => {
    const fetchData = async () => {
      const isAuthenticated = await isAuth(jwtToken, props.setIsAdmin);
      if (isAuthenticated) {
        if (props.isAdmin) {
          navigate("/adminDashboard");
        } else {
          navigate("/userDashboard");
        }
      } else {
        navigate("/auth");
      }
    };

    fetchData();
  }, [jwtToken, props.setIsAdmin, props.isAdmin]);
}
export default Root;
