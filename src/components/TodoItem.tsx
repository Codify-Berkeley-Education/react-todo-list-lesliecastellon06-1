import type { Task } from "../types/taskTypes";

type TodoItemProps = {
  task: Task;
};

function TodoItem({ task }: TodoItemProps) {
  return (
    <div>
      <h3>{task.name}</h3>
      <p>Deadline: {task.deadline}</p>
    </div>
  );
}

export default TodoItem;
