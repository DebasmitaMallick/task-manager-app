// hooks/useTasks.ts
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addTask, editTask, deleteTask, getTasks } from "../services/taskService";
import { Task } from "../types";

export const useGetTasks = () => {
  return useQuery<Task[]>({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });
};

// Add Task Hook
export const useAddTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addTask,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
  });
};

type EditTaskArgs = {
  id: string;
  updatedTask: { title: string };
};

// Edit Task Hook
export const useEditTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, updatedTask }: EditTaskArgs) =>
      editTask(id, updatedTask),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
  });
};

// Delete Task Hook
export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteTask,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
  });
};
