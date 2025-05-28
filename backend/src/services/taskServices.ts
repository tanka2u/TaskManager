import { Task, TaskStatus } from "../types/task";
import { v4 as uuidv4 } from "uuid";

let tasks: Task[] = [];

export const getAllTasks = () => tasks;

export const createTask = (title: string, description: string): Task => {
  const newTask: Task = {
    id: uuidv4(),
    title,
    description,
    status: "pending",
  };
  tasks.push(newTask);
  return newTask;
};

export const deleteTask = (id: string): boolean => {
  const index = tasks.findIndex(task => task.id === id);
  if (index !== -1) {
    tasks.splice(index, 1);
    return true;
  }
  return false;
};

export const updateTaskStatus = (id: string, status: TaskStatus): Task | null => {
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.status = status;
    return task;
  }
  return null;
};
