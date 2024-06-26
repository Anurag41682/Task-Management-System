import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./components/AuthPage";
import AdminDashboard from "./components/AdminDashboard";
import AdminLogin from "./components/AdminLogin";
import UserLogin from "./components/UserLogin";
import NewAdminPage from "./components/NewAdminPage";
import Root from "./components/Root";
import { useState } from "react";
import UserDashboard from "./components/UserDashboard";
function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Root setIsAdmin={setIsAdmin} isAdmin={isAdmin} />}
          />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/adminDashboard" element={<AdminDashboard />} />
          <Route path="/userDashboard" element={<UserDashboard />} />

          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/userLogin" element={<UserLogin />} />
          <Route path="/adminCreate" element={<NewAdminPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
