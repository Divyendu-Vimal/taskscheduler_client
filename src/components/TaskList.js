import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SetReminder from './SetReminder';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/tasks`, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(response => setTasks(response.data))
            .catch(error => console.error('Error fetching tasks:', error));
    }, []);

    const handleDelete = id => {
        const token = localStorage.getItem('token');
        axios.delete(`${process.env.REACT_APP_API_BASE_URL}/tasks/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(() => setTasks(tasks.filter(task => task._id !== id)))
            .catch(error => console.error('Error deleting task:', error));
    };

    const handleComplete = id => {
        const token = localStorage.getItem('token');
        axios.patch(`${process.env.REACT_APP_API_BASE_URL}/tasks/${id}/complete`, {}, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(response => setTasks(tasks.map(task => task._id === id ? response.data : task)))
            .catch(error => console.error('Error marking task as completed:', error));
    };

    return (
        <div className="task-list-container">
            <h1>Task List</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Due Date</th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(task => (
                        <tr key={task._id}>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>{new Date(task.dueDate).toLocaleDateString()}</td>
                            <td>{task.priority}</td>
                            <td>{task.isCompleted ? 'Completed' : 'Pending'}</td>
                            <td>
                                <button className="btn btn-primary" onClick={() => handleComplete(task._id)}>Complete</button>
                                <button className="btn btn-danger" onClick={() => handleDelete(task._id)}>Delete</button>
                                <SetReminder taskId={task._id} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TaskList;
