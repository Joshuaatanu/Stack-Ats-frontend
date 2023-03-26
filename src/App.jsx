import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import StudentDash from "./pages/StudentDash";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/student" element={<StudentDash/>} />
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
