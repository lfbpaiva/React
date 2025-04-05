import { useState } from 'react';
import './App.css';

export default function ListaDeTarefas() {
  const [tarefa, setTarefas] = useState<String[]>([]);
  const [novaTarefa, setNovaTarefa] = useState("");

  const adicionarTarefa = () => {
    if (novaTarefa.trim() === "") return;
    setTarefas([...tarefa, novaTarefa]);
    setNovaTarefa("");
  };

  return (
    <div className="container">
      <h1>LISTA DE TAREFAS</h1>
      <div>
        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder="Adicione sua tarefa"
        />
        <button onClick={adicionarTarefa}>
          Adicionar
        </button>
      </div>
      <ul>
        {tarefa.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}
