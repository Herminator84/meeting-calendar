// src/services/taskService.js

// Function to simulate fetching tasks from an API or database
export const getTasks = () => {
    // This could be a call to a real API (e.g., Axios or Fetch)
    return [
      { id: 1, title: "Finish React project", status: "In Progress" },
      { id: 2, title: "Read JavaScript book", status: "Pending" },
      { id: 3, title: "Write blog post", status: "Completed" }
    ];
  };
  
  // Function to add a new task
  export const addTask = (task) => {
    // Simulate adding task (e.g., API POST request)
    console.log("Task added:", task);
    return task;
  };
  
  // Function to update a task's status
  export const updateTask = (taskId, status) => {
    // Simulate updating task (e.g., API PUT request)
    console.log("Task updated:", { taskId, status });
    return { taskId, status };
  };
  
  // Function to delete a task
  export const deleteTask = (taskId) => {
    // Simulate deleting task (e.g., API DELETE request)
    console.log("Task deleted:", taskId);
    return taskId;
  };
  