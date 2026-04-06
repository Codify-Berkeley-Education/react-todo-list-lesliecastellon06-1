import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import type { Task } from "../types/taskTypes";

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
      deadline: deadline,
    };

    setTodoList([...todoList, newTask]);

    // clear inputs
    setNewTaskName("");
    setNewTaskDeadline("");
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

      <p>{JSON.stringify(todoList)}</p>
    </div>
  );
}

export default TodoList;
