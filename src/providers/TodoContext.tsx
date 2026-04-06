import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";
import type { Task } from "../types/taskTypes";

type TodoContextType = {
  tasks: Task[];
  addTask: (taskName: string, deadline: string) => void;
  deleteTask: (id: string) => void;
  toggleCompleteTask: (id: string) => void;
};

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export function TodoProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks) as Task[]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(taskName: string, deadline: string) {
    if (taskName.trim() === "") return;

    const newTask: Task = {
      id: uuidv4(),
      name: taskName,
      deadline: deadline.trim() === "" ? undefined : deadline,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  function deleteTask(id: string) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  function toggleCompleteTask(id: string) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <TodoContext.Provider
      value={{ tasks, addTask, deleteTask, toggleCompleteTask }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo() {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("useTodo must be used within a TodoProvider");
  }

  return context;
}
