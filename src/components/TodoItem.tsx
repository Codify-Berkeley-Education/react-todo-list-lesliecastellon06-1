import type { Task } from "../types/taskTypes";

type TodoItemProps = {
  task: Task;
  handleToggleCompleteTask: (id: string) => void;
  handleDeleteTask: (id: string) => void;
};

function TodoItem({
  task,
  handleToggleCompleteTask,
  handleDeleteTask,
}: TodoItemProps) {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => handleToggleCompleteTask(task.id)}
        />
        <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
          {task.name}
        </span>
      </label>

      {task.deadline && <p>Deadline: {task.deadline}</p>}

      <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default TodoItem;
