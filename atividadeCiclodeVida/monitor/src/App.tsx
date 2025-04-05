import { useState, useEffect } from "react";
import './App.css';

function ComponenteMonitorado() {
  useEffect(() => {
    console.log("🟢 Componente montado");

    const interval = setInterval(() => {
      console.log("Intervalo ativo: recurso sendo usado...");
    }, 2000);

    return () => {
      console.log("Componente desmontado");
      clearInterval(interval);
      console.log("Recurso limpo: intervalo foi finalizado");
    };
  }, []);

  return (
    <div className="ComponenteMonitorado">
      <h2>Componente Ativo</h2>
      <p>Veja os logs no console</p>
    </div>
  );
}

export default function Monitor() {
  const [visivel, setVisivel] = useState(false);

  const montarComponente = () => setVisivel(true);
  const desmontarComponente = () => setVisivel(false);

  return (
    <div className="container">
      <h2 className="text-lg">Monitor de Componentes</h2>

      {!visivel ? (
        <button onClick={montarComponente}>Montar Componente</button>
      ) : (
        <>
          <ComponenteMonitorado />
          <button onClick={desmontarComponente}>Desmontar Componente</button>
        </>
      )}
    </div>
  );
}
