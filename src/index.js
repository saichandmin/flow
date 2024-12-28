import React from "react";
import ReactDOM from "react-dom/client"; // import from 'react-dom/client'
import App from "./App"; // Import the App component

// Create a root element and render the App component
const root = ReactDOM.createRoot(document.getElementById("root")); // Create the root using createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
