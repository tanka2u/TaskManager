import React, { useState } from "react";
import type { Task } from "../types/task";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTask, updateTaskStatus } from "../services/api";

interface Props {
  task: Task;
}

export const TaskItem = ({ task }: Props) => {
  const queryClient = useQueryClient();
  const [showDetails, setShowDetails] = useState(false);

  const deleteMutation = useMutation({
    mutationFn: () => deleteTask(task.id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
  });

  const toggleMutation = useMutation({
    mutationFn: () => updateTaskStatus(task.id, !task.completed),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
  });

  return (
    <li className="mb-4 p-4 border rounded-md shadow-sm bg-white">
      <div className="flex items-center justify-between">
        <span className={`text-lg ${task.completed ? "line-through text-gray-500" : ""}`}>
          {task.title}
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => toggleMutation.mutate()}
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {task.completed ? "Undo" : "Complete"}
          </button>
          <button
            onClick={() => deleteMutation.mutate()}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Delete
          </button>
          <button
            onClick={() => setShowDetails((prev) => !prev)}
            className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          >
            {showDetails ? "Hide" : "View"}
          </button>
        </div>
      </div>

      {showDetails && (
        <div className="mt-2 pl-4 text-sm text-gray-600">
          <p>
            <strong>Description:</strong> {task.description}
          </p>
          <p>
            <strong>Status:</strong> {task.completed ? "Done" : "Pending"}
          </p>
        </div>
      )}
    </li>
  );
};
