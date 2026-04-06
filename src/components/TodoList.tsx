import { useState } from "react";

function TodoList() {
  const [newTaskName, setNewTaskName] = useState<string>("");
  const [newTaskDescription, setNewTaskDescription] = useState<string>("");

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter a task"
          name="task"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Enter a description"
          name="description"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
          required
        />

        <button type="submit">Add Task</button>
      </form>

      <p>Task Name: {newTaskName}</p>
      <p>Task Description: {newTaskDescription}</p>
    </div>
  );
}

export default TodoList;
