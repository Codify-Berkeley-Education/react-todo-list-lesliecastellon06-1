import type { Task } from "../types/taskTypes";

type TodoItemProps = {
  task: Task;
};

function TodoItem({ task }: TodoItemProps) {
  return (
    <div>
      <label>
        <input type="checkbox" checked={task.completed} readOnly />
        <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
          {task.name}
        </span>
      </label>

      {task.deadline && <p>Deadline: {task.deadline}</p>}
    </div>
  );
}

export default TodoItem;
