import { Link } from "react-router-dom";
import * as api from "../api/index";
import { useEffect, useState } from "react";
function AuthPage() {
  const [isAdminCreated, setIsAdminCreated] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.isAdminCreated();
        setIsAdminCreated(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  if (isAdminCreated === null) {
    return <div>Loading...</div>;
  }
  console.log(isAdminCreated);
  return isAdminCreated ? (
    <div className="authPage">
      <Link className="authButton" to="/login">
        Login as Admin
      </Link>
      <Link className="authButton" to="/login">
        Login as User
      </Link>
    </div>
  ) : (
    <div className="authPage">
      <h2>No admin found, please create one.</h2>
      <Link className="authButton" to="/adminCreate">
        Create New Admin
      </Link>
    </div>
  );
}
export default AuthPage;
