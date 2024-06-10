import { Link } from "react-router-dom";
function AuthPage() {
  let isAdmin = false;

  return isAdmin ? (
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
      <Link className="authButton" to="adminCreate">
        Create New Admin
      </Link>
    </div>
  );
}
export default AuthPage;
