import { createContext, useContext } from "react";
import type { Task } from "../types/taskTypes";

type TodoContextType = {
  todoList: Task[];
  addTask: (taskName: string, deadline: string) => void;
  handleToggleCompleteTask: (id: string) => void;
  handleDeleteTask: (id: string) => void;
};

export const TodoContext = createContext<TodoContextType | undefined>(undefined);

export function TodoProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function useTodo() {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("useTodo must be used within a TodoProvider");
  }

  return context;
}
