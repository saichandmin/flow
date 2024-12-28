// src/components/Node.js
import React from "react";

const Node = ({ label, description, onClick }) => {
  return (
    <div onClick={onClick} className="node">
      <h4>{label}</h4>
      <p>{description}</p>
    </div>
  );
};

export default Node;
