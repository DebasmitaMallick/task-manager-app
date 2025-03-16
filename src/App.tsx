import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/LoginPage";
import Task from "./pages/TaskPage";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/task" element={<Task />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
