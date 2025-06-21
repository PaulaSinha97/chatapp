import "./App.css";
import { Dashboard } from "./DashboardComp/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from './auth/login'
import Signup from "./auth/signup/signup";
import Login from "./auth/login/login";
import Chat from "./DashboardComp/chatu";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
