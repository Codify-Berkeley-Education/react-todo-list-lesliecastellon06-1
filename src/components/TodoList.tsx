import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import type { Task } from "../types/taskTypes";
import TodoItem from "./TodoItem";

function TodoList() {
  const [newTaskName, setNewTaskName] = useState<string>("");
  const [newTaskDeadline, setNewTaskDeadline] = useState<string>("");
  const [todoList, setTodoList] = useState<Task[]>([]);

  function addTask(taskName: string, deadline: string) {
    if (taskName.trim() === "") {
      return;
    }

    const newTask: Task = {
      id: uuidv4(),
      name: taskName,
      deadline: deadline.trim() === "" ? undefined : deadline,
      completed: false,
    };

    setTodoList([...todoList, newTask]);
    setNewTaskName("");
    setNewTaskDeadline("");
  }

  function handleToggleCompleteTask(id: string) {
    const updatedTodoList = todoList.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTodoList(updatedTodoList);
  }

  function handleDeleteTask(id: string) {
    const updatedTodoList = todoList.filter((task) => task.id !== id);
    setTodoList(updatedTodoList);
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTask(newTaskName, newTaskDeadline);
        }}
      >
        <input
          type="text"
          placeholder="Enter a task"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Enter a deadline"
          value={newTaskDeadline}
          onChange={(e) => setNewTaskDeadline(e.target.value)}
        />

        <button type="submit">Add Task</button>
      </form>

      {todoList.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          handleToggleCompleteTask={handleToggleCompleteTask}
          handleDeleteTask={handleDeleteTask}
        />
      ))}
    </div>
  );
}

export default TodoList;
