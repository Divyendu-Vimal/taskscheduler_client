import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


const Home = () => {
    return (
        <div className="home-container d-flex justify-content-center align-items-center">
            <div className="home-content-container">
                <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start">
                    <div className="mr-lg-5 mb-3 mb-lg-0">
                        <img src='hero-img.png' alt="Task Scheduler Image" className="task-scheduler-image" />
                    </div>
                    <div className="home-text-container">
                        <h1 className="text-center text-white mb-4">Task Scheduler</h1>
                        <p className="text-white">
                            Welcome to the Task Scheduler! This website allows you to create, edit, and delete tasks with due dates and priorities. You can also mark tasks as completed and set reminders. Use the sign-up and login options to get started.
                        </p>
                        <div className="mt-4">
                            <Link to="/signup" className="btn btn-primary btn-lg mx-2 rounded-pill">Sign Up</Link>
                            <Link to="/login" className="btn btn-secondary btn-lg mx-2 rounded-pill">Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
