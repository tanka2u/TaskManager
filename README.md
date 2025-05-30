Overview
This is a full-stack Task Manager application built with:
Backend: Node.js with Express
Frontend: React with TypeScript
Database: In-memory storage (for demonstration purposes)

The application allows users to:
Create new tasks with titles and descriptions
View all tasks in a list
Mark tasks as complete/pending
Delete tasks
View task details

Backend Structure
Key Files
server.js - Main server entry point
index.ts - Express app configuration
routes/tasks.ts - Task-related routes with CORS configuration
services/taskServices.ts - Business logic for task operations
types/task.ts - Type definitions

Features
RESTful API endpoints for CRUD operations
Zod schema validation for request bodies
CORS configured for frontend access
UUID generation for task IDs
Frontend Structure
Key Components
TaskForm.tsx - Form for adding new tasks
TaskList.tsx - Displays all tasks
TaskItem.tsx - Individual task component with actions
api.ts - Axios client for backend communication

Features
React Query for data fetching and state management
Zod form validation with react-hook-form
Responsive UI with clean design
Real-time updates when tasks are modified

Setup Instructions
Backend
Install dependencies:
cd backend
npm install

Start the server:
npm start
Server runs on http://localhost:3000

Frontend
Install dependencies:
cd frontend
npm install

Start the development server:
npm run dev
Application runs on http://localhost:5173

API Endpoints
Method	Endpoint	Description
GET	/tasks	Get all tasks
POST	/tasks	Create a new task
DELETE	/tasks/:id	Delete a task
PATCH	/tasks/:id	Update task status
Type Definitions
typescript
interface Task {
  id: string;
  title: string;
  description: string;
  status: "pending" | "done";
}
Dependencies
Backend
express
zod
uuid
cors

Frontend
react
react-dom
@tanstack/react-query
axios
zod
@hookform/resolvers
react-hook-form
