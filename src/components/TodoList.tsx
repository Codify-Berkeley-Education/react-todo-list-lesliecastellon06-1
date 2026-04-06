import { useState } from "react";
import TodoItem from "./TodoItem";
import { useTodo } from "../providers/TodoContext";

function TodoList() {
  const [newTaskName, setNewTaskName] = useState<string>("");
  const [newTaskDeadline, setNewTaskDeadline] = useState<string>("");

  const { tasks, addTask } = useTodo();

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTask(newTaskName, newTaskDeadline);
          setNewTaskName("");
          setNewTaskDeadline("");
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

      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TodoList;
