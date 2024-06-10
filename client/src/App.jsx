import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./components/AuthPage";
import Dashboard from "./components/Dashboard";
import LoginPage from "./components/LoginPage";
import NewAdminPage from "./components/NewAdminPage";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/adminCreate" element={<NewAdminPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
