import { useState, useRef, useEffect } from "react";
import './App.css';

export default function Timer() {
  const [tempo, setTempo] = useState(0);
  const [ativo, setAtivo] = useState(false);
  const intervaloRef = useRef<number | null>(null);

  const iniciarOuRetomar = () => {
    if (!intervaloRef.current) {
      intervaloRef.current = setInterval(() => {
        setTempo((prevTempo) => prevTempo + 1);
      }, 1000);
      setAtivo(true);
    }
  };

  const pausar = () => {
    if (intervaloRef.current) {
      clearInterval(intervaloRef.current);
      intervaloRef.current = null;
      setAtivo(false);
    }
  };

  const resetar = () => {
    pausar();
    setTempo(0);
  };

  useEffect(() => {
    return () => {
      if (intervaloRef.current) {
        clearInterval(intervaloRef.current);
      }
    };
  }, []);

  return (
    <div className="timer-container">
      <h2>Timer</h2>
      <div className="timer-display">{tempo}s</div>

      <div className="button-container">
        <button
          onClick={ativo ? pausar : iniciarOuRetomar}
          className={`button ${ativo ? "bg-yellow-500" : "bg-green-500"} text-white`}
        >
          {ativo ? "Pausar" : tempo > 0 ? "Retomar" : "Iniciar"}
        </button>

        <button onClick={resetar} className="button bg-red-500 text-white">
          Resetar
        </button>
      </div>
    </div>
  );
}
