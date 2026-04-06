import type { Task } from "../types/taskTypes";
import { useTodo } from "../providers/TodoContext";

type TodoItemProps = {
  task: Task;
};

function TodoItem({ task }: TodoItemProps) {
  const { toggleCompleteTask, deleteTask } = useTodo();

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleCompleteTask(task.id)}
        />
        <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
          {task.name}
        </span>
      </label>

      {task.deadline && <p>Deadline: {task.deadline}</p>}

      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default TodoItem;
