// src/components/TaskTracker.jsx
import React, { useState, useEffect } from 'react';
import { getTasks, addTask, updateTask, deleteTask } from '../services/taskService'; // Import task service

const TaskTracker = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskStatus, setNewTaskStatus] = useState('Pending');

  // Fetch tasks when component mounts
  useEffect(() => {
    const fetchedTasks = getTasks(); // Fetch tasks using taskService
    setTasks(fetchedTasks);
  }, []);

  // Add new task
  const handleAddTask = () => {
    const newTask = { title: newTaskTitle, status: newTaskStatus };
    const addedTask = addTask(newTask); // Call task service to add task
    setTasks([...tasks, addedTask]); // Update state
    setNewTaskTitle('');
    setNewTaskStatus('Pending');
  };

  // Update task status
  const handleUpdateTaskStatus = (taskId, newStatus) => {
    const updatedTask = updateTask(taskId, newStatus); // Call task service to update task
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, status: newStatus } : task
    ));
  };

  // Delete task
  const handleDeleteTask = (taskId) => {
    deleteTask(taskId); // Call task service to delete task
    setTasks(tasks.filter(task => task.id !== taskId)); // Remove task from state
  };

  return (
    <div className="task-tracker">
      <h2>Task Tracker</h2>

      <div className="task-form">
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="Task Title"
        />
        <select
          value={newTaskStatus}
          onChange={(e) => setNewTaskStatus(e.target.value)}
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      <div className="task-list">
        <h3>Task List</h3>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <h4>{task.title}</h4>
              <p>Status: {task.status}</p>
              <button onClick={() => handleUpdateTaskStatus(task.id, "In Progress")}>Mark as In Progress</button>
              <button onClick={() => handleUpdateTaskStatus(task.id, "Completed")}>Mark as Completed</button>
              <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskTracker;
