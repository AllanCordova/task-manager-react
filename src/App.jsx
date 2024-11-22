import { useState } from "react";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";
import { FastForward } from "lucide-react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar Programação",
      description: "Aprender banco de dados relacionais",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar Matemática",
      description: "Aprender banco de dados relacionais",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar Segurança",
      description: "Aprender banco de dados relacionais",
      isCompleted: false,
    },
  ]);

  function completedTask(taskId) {
    // alterando a classe de um objeto apartir de uma propiedade
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });

    setTasks(newTasks);
  }

  function removeTask(taskId) {
    // atualizando nosso state com objetos que atendem uma condição
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
  }

  function addTasks(title, description) {
    // adicionando tarefas a nosso state atualizando ele
    const newTask = {
      id: tasks.length + 1,
      title, 
      description,
      isCompleted: false,
    }

    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center">
      <div className="w-[500px] space-y-4">
        <h1 className="text-white text-4xl p-5 font-sans">
          Gerenciador de tarefas
        </h1>
        <AddTasks addTasks={addTasks} />
        <Tasks tasks={tasks} completedTask={completedTask} removeTask={removeTask}/>
      </div>
    </div>
  );
}

export default App;

// com react adicionamos componentes jsx, return eles pelo app
// aicionamos interatividade mudando valores da tela com state
// usamos java script junto com o html e enviamos dados para outros arquivos por promissies