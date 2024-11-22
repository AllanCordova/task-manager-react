import { AlertTriangle } from "lucide-react";
import { useState } from "react";

function AddTasks({addTasks}) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    return (
        <div className="space-y-4 p-4 bg-slate-200 rounded-md shadow-md flex flex-col">
            <input onChange={(event) => setTitle(event.target.value)} value={title} className="bg-slate-50-200 p-3 border border-slate-200 outline-slate-500 rounded-md text-black placeholder:text-black placeholder:text-md" placeholder="Nome da tarefa" type="text" />
            <input onChange={(event) => setDescription(event.target.value)} value={description} className="bg-slate-50-200 p-3 border border-slate-200 outline-slate-500 rounded-md text-black placeholder:text-black placeholder:text-md" type="text" placeholder="Descrição da tarefa" />
            <button onClick={() => {
                if (!title.trim() || !description.trim()) {
                    alert('preencha os campos input');
                } else {
                    addTasks(title, description);
                    setTitle('');
                    setDescription('');
                }
            }} 
            className="py-2 hover:bg-green-600 bg-slate-500 rounded-md text-white w-full text-lg">salvar</button>
        </div>
    )
}

export default AddTasks;