function NewAdminPage() {
  return (
    <>
      <div className="adminPage">
        <h1>Create New Admin</h1>
        <form>
          <div className="adminInput">
            <label>Username : </label>
            <input type="name" required></input>
          </div>
          <div className="adminInput">
            <label>Password :</label>
            <input type="password" />
          </div>
          <div className="adminInput">
            <label>Confirm Password :</label>
            <input type="password" />
          </div>
          <div className="createAdminButton">Create Admin</div>
        </form>
      </div>
    </>
  );
}
export default NewAdminPage;
