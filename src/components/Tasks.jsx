import { ChevronRightIcon, TrashIcon } from "lucide-react";

function Tasks(props) {
  return (
    <div>
      <ul className="space-y-4 p-4 bg-slate-200 rounded-md shadow-md">
        {props.tasks.map((task) => (
          <li key={task.id} className="flex space-x-4">
            <button
              className={`w-full text-white p-2 rounded-md hover:bg-slate-500 ${
                task.isCompleted ? "line-through bg-slate-600" : "bg-slate-400"
              }`}
              onClick={() => props.completedTask(task.id)}
            >
              {task.title}
            </button>

            <button className="p-2 rounded-md bg-slate-400 text-white hover:bg-slate-500">
              <ChevronRightIcon />
            </button>

            <button className="p-2 rounded-md bg-slate-400 text-white hover:bg-slate-500" onClick={() => {
                props.removeTask(task.id)
            }}>
                <TrashIcon></TrashIcon>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
