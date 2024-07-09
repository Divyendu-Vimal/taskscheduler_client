import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/tasks"
          element={
            <>
              <AddTask />
              <TaskList />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
