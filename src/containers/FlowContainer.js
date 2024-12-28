// src/containers/FlowContainer.js
import React, { useEffect, useState } from "react";
import ReactFlow, {
  removeElements,
  MiniMap,
  Controls,
} from "react-flow-renderer";
import Node from "../components/Node";
import Sidebar from "../components/Sidebar";

const FlowContainer = () => {
  const [elements, setElements] = useState([]);
  const [metadata, setMetadata] = useState(null);

  useEffect(() => {
    const fetchMetadata = async () => {
      const response = await fetch("/metadata.json"); // Fetch metadata
      const data = await response.json();
      setMetadata(data);
    };
    fetchMetadata();
  }, []);

  useEffect(() => {
    if (metadata) {
      const elements = [...metadata.nodes, ...metadata.edges];
      setElements(elements);
    }
  }, [metadata]);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ flex: 1 }}>
        <ReactFlow
          elements={elements}
          onElementsRemove={(elementsToRemove) =>
            setElements((els) => removeElements(elementsToRemove, els))
          }
        >
          <MiniMap />
          <Controls />
        </ReactFlow>
      </div>
      <Sidebar />
    </div>
  );
};

export default FlowContainer;
