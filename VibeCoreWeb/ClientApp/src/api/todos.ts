import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { components } from "./schema.gen";
import { apiClient } from "./client";

export type TodoItem = components["schemas"]["TodoItem"];

const QUERY_KEY = ["todos"] as const;

export function useTodos() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: async () => {
      const { data, error } = await apiClient.GET("/api/Todos");
      if (error) throw new Error("Failed to fetch todos");
      return data ?? [];
    },
    refetchInterval: 5000,
  });
}

export function useCreateTodo() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (body: Pick<TodoItem, "title" | "isCompleted">) => {
      const { data, error } = await apiClient.POST("/api/Todos", { body });
      if (error) throw new Error("Failed to create todo");
      return data;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: QUERY_KEY }),
  });
}

export function useUpdateTodo() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (todo: TodoItem) => {
      const { error } = await apiClient.PUT("/api/Todos/{id}", {
        params: { path: { id: todo.id! } },
        body: todo,
      });
      if (error) throw new Error("Failed to update todo");
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: QUERY_KEY }),
  });
}

export function useDeleteTodo() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: number) => {
      const { error } = await apiClient.DELETE("/api/Todos/{id}", {
        params: { path: { id } },
      });
      if (error) throw new Error("Failed to delete todo");
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: QUERY_KEY }),
  });
}

export function useCompleteTodo() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: number) => {
      const { error } = await apiClient.PATCH("/api/Todos/{id}/complete", {
        params: { path: { id } },
      });
      if (error) throw new Error("Failed to complete todo");
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: QUERY_KEY }),
  });
}
