Overview
This project implements a dynamic diagram flow application using React and React Flow, allowing users to visualize and interact with nodes and edges. The application supports adding, editing, and deleting nodes and edges. It also includes a sidebar for inputting metadata, and features such as real-time updates, smooth animations, and responsiveness.
Project Setup
Prerequisites
To get started, ensure you have the following installed:

Node.js (version 14 or higher)
npm (Node package manager)
Installation
Clone the repository:
git clone <repository-url>
cd <project-folder>
Install dependencies: After navigating to the project folder, run
npm install
Start the development server: To start the project locally, run:
npm start
This will launch the application in your browser at http://localhost:3000.
/src
  /components          - React components for the application (e.g., Sidebar, FlowContainer)
  /styles              - Global and component-specific styles
  /utils               - Utility functions (e.g., for handling metadata)
  App.js               - Main application entry point
  index.js             - React rendering entry point
  App.css              - Global styling for the app
  /assets              - Images, icons, etc.
  metadata.json        - Sample metadata file for nodes and edges
Usage Instructions
Adding a Node:

From the sidebar, input node details (e.g., label, position, type) and click the "Add Node" button. This will dynamically add a node to the flow diagram.
Adding an Edge:

After nodes are added, you can create connections between them. Select two nodes and click "Add Edge". The edge will visually connect the two nodes on the flow diagram.
Editing a Node:

In the sidebar, update the node's properties (e.g., label, position) and click "Update Node". The corresponding node in the diagram will update.
Deleting a Node or Edge:

Select the node or edge you want to delete and click the "Delete" button.
Save and Share:

The app includes options to save the current flow diagram and share it with others. This functionality can be triggered via the sidebar.
Interactive Features:

The diagram supports drag-and-drop node placement, resizing nodes, and adjusting edges dynamically.
Responsive Design:

The app is fully responsive, automatically adjusting for different screen sizes, ensuring a seamless experience across desktop, tablet, and mobile devices.
Architectural Decisions
React Flow Integration
React Flow was chosen as the core library for building the diagram flow due to its flexibility, ease of use, and rich features such as customizable nodes, edges, and controls.
The app is structured with a state-driven approach, where the node and edge data is stored in the component's state, and React Flow is used to render this data dynamically.
Metadata Management
Metadata is used to store node and edge information such as positions, labels, and connections. This metadata is stored in a JSON format, which is parsed and rendered by React Flow.
The metadata is dynamically loaded and updated based on user input in the sidebar.
Component Structure
Sidebar: Contains input fields for metadata such as node labels, edge types, and actions like add, update, or delete.
React Flow Container: Displays the dynamic flow diagram and handles user interactions like drag-and-drop, node resizing, and edge creation.
State Management: Local component state is used for managing the metadata, with useState hooks to handle the flow diagram’s data and updates.
Styling
CSS Modules: Global styles are written in App.css, with individual component styling handled in separate CSS files for modularity.
The app uses a flexbox layout for responsive design, with different styles applied based on screen size using media queries.
ample Metadata JSON File
Here is a sample metadata.json file that defines a set of nodes and edges:
{
  "nodes": [
    {
      "id": "1",
      "type": "input",
      "position": { "x": 50, "y": 150 },
      "data": { "label": "Start Node" }
    },
    {
      "id": "2",
      "type": "default",
      "position": { "x": 200, "y": 150 },
      "data": { "label": "Process Node" }
    },
    {
      "id": "3",
      "type": "output",
      "position": { "x": 400, "y": 150 },
      "data": { "label": "End Node" }
    }
  ],
  "edges": [
    {
      "id": "e1-2",
      "source": "1",
      "target": "2",
      "animated": true,
      "label": "Start to Process"
    },
    {
      "id": "e2-3",
      "source": "2",
      "target": "3",
      "animated": false,
      "label": "Process to End"
    }
  ]
}
Structure Explanation:
Nodes: Each node has a unique id, a type (which determines the style of the node), a position object (for positioning on the screen), and data which holds any metadata such as the node’s label.
Edges: Each edge connects two nodes via the source and target IDs. It also includes properties like animated (whether the edge should have animation) and label (optional edge label).
