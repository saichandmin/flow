import React, { useState } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  addEdge,
  useNodesState,
  useEdgesState,
} from "reactflow";
import "reactflow/dist/style.css"; // Necessary for React Flow styles
import "./App.css";

const App = () => {
  // Initial nodes and edges
  const initialNodes = [
    { id: "1", data: { label: "Node 1" }, position: { x: 50, y: 50 } },
    { id: "2", data: { label: "Node 2" }, position: { x: 250, y: 150 } },
  ];
  const initialEdges = [
    {
      id: "e1-2",
      source: "1",
      target: "2",
      type: "smoothstep",
      label: "Edge 1-2",
    },
  ];

  // React Flow hooks for state management
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedElement, setSelectedElement] = useState(null);

  // Function to add a new node
  const handleAddNode = () => {
    const newNode = {
      id: `node-${nodes.length + 1}`,
      data: { label: `Node ${nodes.length + 1}` },
      position: { x: Math.random() * 300, y: Math.random() * 300 },
    };
    setNodes((prevNodes) => [...prevNodes, newNode]);
  };

  // Function to edit a node's label
  const handleEditNode = (id, newLabel) => {
    setNodes((prevNodes) =>
      prevNodes.map((node) =>
        node.id === id
          ? { ...node, data: { ...node.data, label: newLabel } }
          : node
      )
    );
  };

  // Function to delete a node
  const handleDeleteNode = (nodeId) => {
    setNodes((prevNodes) => prevNodes.filter((node) => node.id !== nodeId));
    setEdges((prevEdges) =>
      prevEdges.filter(
        (edge) => edge.source !== nodeId && edge.target !== nodeId
      )
    );
  };

  // Function to add a new edge
  const handleAddEdge = (source, target) => {
    const newEdge = {
      id: `e${source}-${target}`,
      source,
      target,
      type: "smoothstep",
      label: `Edge from ${source} to ${target}`,
    };
    setEdges((prevEdges) => [...prevEdges, newEdge]);
  };

  // Function to edit an edge's label
  const handleEditEdge = (id, newLabel) => {
    setEdges((prevEdges) =>
      prevEdges.map((edge) =>
        edge.id === id ? { ...edge, label: newLabel } : edge
      )
    );
  };

  // Function to delete an edge
  const handleDeleteEdge = (edgeId) => {
    setEdges((prevEdges) => prevEdges.filter((edge) => edge.id !== edgeId));
  };

  // Handle element selection (node or edge)
  const handleElementClick = (_, element) => {
    setSelectedElement(element);
  };

  // Handle onConnect for adding edges via user interaction
  const onConnect = (params) =>
    setEdges((edges) => addEdge({ ...params, animated: true }, edges));

  return (
    <div style={{ height: "100vh", display: "flex" }}>
      {/* React Flow Diagram */}
      <div style={{ flex: 1 }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onElementClick={handleElementClick}
          fitView
          style={{ background: "#f5f5f5" }}
        >
          <MiniMap />
          <Controls />
          <Background color="#aaa" gap={16} />
        </ReactFlow>
      </div>

      {/* Sidebar for Interactions */}
      <div
        className="sidebar"
        style={{
          width: "300px",
          padding: "10px",
          background: "#f0f0f0",
          overflowY: "auto",
        }}
      >
        <h3>Sidebar</h3>
        <button onClick={handleAddNode}>Add Node</button>

        {selectedElement && (
          <div style={{ marginTop: "20px" }}>
            <h4>Selected Element</h4>
            {selectedElement.data ? (
              <div>
                <p>Node ID: {selectedElement.id}</p>
                <input
                  type="text"
                  value={selectedElement.data.label}
                  onChange={(e) =>
                    handleEditNode(selectedElement.id, e.target.value)
                  }
                  placeholder="Edit Node Label"
                />
                <button onClick={() => handleDeleteNode(selectedElement.id)}>
                  Delete Node
                </button>
              </div>
            ) : (
              <div>
                <p>Edge ID: {selectedElement.id}</p>
                <input
                  type="text"
                  value={selectedElement.label}
                  onChange={(e) =>
                    handleEditEdge(selectedElement.id, e.target.value)
                  }
                  placeholder="Edit Edge Label"
                />
                <button onClick={() => handleDeleteEdge(selectedElement.id)}>
                  Delete Edge
                </button>
              </div>
            )}
          </div>
        )}

        <div style={{ marginTop: "20px" }}>
          <h4>Nodes</h4>
          {nodes.map((node) => (
            <div key={node.id} style={{ marginBottom: "10px" }}>
              <span>{node.data.label}</span>
              <button
                onClick={() => handleDeleteNode(node.id)}
                style={{ marginLeft: "10px" }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "20px" }}>
          <h4>Edges</h4>
          {edges.map((edge) => (
            <div key={edge.id} style={{ marginBottom: "10px" }}>
              <span>{edge.label}</span>
              <button
                onClick={() => handleDeleteEdge(edge.id)}
                style={{ marginLeft: "10px" }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
