import React, { useState } from 'react';
import './Task.css';

const SetReminder = () => {
    const task = {
        _id: '1',
        title: 'Task 1',
        description: 'Description for Task 1',
        dueDate: '2024-07-10',
        priority: 'High',
    };

    const [reminderDate, setReminderDate] = useState('');
    const [reminderTime, setReminderTime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Setting reminder for ${task.title} on ${reminderDate} at ${reminderTime}`);
        setReminderDate('');
        setReminderTime('');
    };

    return (
        <div className="set-reminder-container p-4 rounded">
            <h2 className="text-center mb-4 text-white">Set Reminder for {task.title}</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label text-white">Reminder Date:</label>
                    <input type="date" className="form-control" value={reminderDate} onChange={(e) => setReminderDate(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label className="form-label text-white">Reminder Time:</label>
                    <input type="time" className="form-control" value={reminderTime} onChange={(e) => setReminderTime(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary w-100 rounded-pill">Set Reminder</button>
            </form>
        </div>
    );
};

export default SetReminder;
