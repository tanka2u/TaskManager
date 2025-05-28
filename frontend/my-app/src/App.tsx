import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList.tsx";

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Task Manager</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
