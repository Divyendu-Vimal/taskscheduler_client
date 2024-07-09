import React, { useState } from "react";
import axios from "axios";
import "./Task.css";

const AddTask = ({ onTaskAdded }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Low");
  const [reminder, setReminder] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/tasks`,
        { title, description, dueDate, priority, reminder },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      onTaskAdded(response.data);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <div className="add-task-container p-4 rounded">
      <h2 className="text-center mb-4 text-white">Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label text-white">Title:</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label text-white">Description:</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label text-white">Due Date:</label>
          <input
            type="date"
            className="form-control"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label text-white">Priority:</label>
          <select
            className="form-select"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label text-white">Reminder:</label>
          <input
            type="datetime-local"
            className="form-control"
            value={reminder}
            onChange={(e) => setReminder(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100 rounded-pill">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
