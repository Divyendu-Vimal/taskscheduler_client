import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { Toaster } from "react-hot-toast";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleTaskAdded = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <BrowserRouter>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/tasks"
          element={
            <>
              <AddTask onTaskAdded={handleTaskAdded} />
              <TaskList tasks={tasks} setTasks={setTasks} />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
