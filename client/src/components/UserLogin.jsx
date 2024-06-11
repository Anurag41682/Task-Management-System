function UserLogin() {
  return (
    <div className="loginPage">
      <h1>Login as User</h1>
      <form className="loginForm">
        <div className="loginInput">
          <label>Username:</label>
          <input type="name" required />
        </div>
        <div className="loginInput">
          <label>Password:</label>
          <input type="password" required />
        </div>
        <div className="loginButton">Login</div>
      </form>
    </div>
  );
}
export default UserLogin;