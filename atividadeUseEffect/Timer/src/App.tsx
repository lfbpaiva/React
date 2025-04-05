import { useState, useEffect } from 'react';
import './App.css';

export default function TimerSimples() {
  const [input, setInput] = useState("");
  const [tempo, setTempo] = useState<number | null>(null);
  const [ativo, setAtivo] = useState(false); 

  useEffect(() => {
    let timer: number;

    if (ativo && tempo !== null && tempo > 0) {
      timer = setTimeout(() => {
        setTempo((prev) => (prev !== null ? prev - 1 : null));
      }, 1000);
    }

    return () => clearTimeout(timer); 
  }, [tempo, ativo]);

  const iniciarContagem = () => {
    const segundos = parseInt(input);
    if (isNaN(segundos) || segundos <= 0) return;
    setTempo(segundos);
    setAtivo(true);
    setInput("");
  };

  const recomeçar = () => {
    setTempo(null);
    setAtivo(false);
    setInput("");
  };

  return (
    <div className="text-center p-4">
      <h1 className="text-2xl font-bold">Cronometro</h1>

      {tempo === null ? (
        <>
          <input
            type="number"
            placeholder="Digite o tempo (s)"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="timer-input"
          />
          <br />
          <button onClick={iniciarContagem} className="start-button">Iniciar</button>
        </>
      ) : (
        <>
          <p className="timer-text">
            {tempo > 0 ? `Tempo restante: ${tempo} segundos` : "Tempo encerrado!"}
          </p>
          <button onClick={recomeçar} className="reset-button">Recomeçar</button>
        </>
      )}
    </div>
  );
}
