// src/index.jsx
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // For React 18 and above
import './index.css'; // Your global styles
import App from './App.jsx'; // Import your root component

// Create the root element where React will render the app
const root = createRoot(document.getElementById('root'));

// Render the root component
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
