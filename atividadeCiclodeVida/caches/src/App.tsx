import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [data, setData] = useState<any[] | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted) return;

    console.log("Componente montado");

    const cached = localStorage.getItem("posts");

    if (cached) {
      console.log("Dados carregados do cache");
      setData(JSON.parse(cached));
    } else {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((json) => {
          console.log("🌐 Dados carregados da API");
          setData(json);
          localStorage.setItem("posts", JSON.stringify(json));
        })
        .catch((err) => console.error("Erro ao buscar dados:", err));
    }

    return () => {
      console.log("Componente desmontado");
      localStorage.removeItem("posts");
      console.log("Cache limpo");
      setData(null);
    };
  }, [mounted]);

  const salvarCache = () => {
    if (data) {
      localStorage.setItem("posts", JSON.stringify(data));
      console.log("Dados salvos manualmente no cache");
    }
  };

  const limparCache = () => {
    localStorage.removeItem("posts");
    console.log("Cache limpo manualmente");
  };

  return (
    <div className="container">
      <h1>Gerenciador de Dados</h1>
      <button onClick={() => setMounted(!mounted)}>
        {mounted ? "Desmontar Componente" : "Montar Componente"}
      </button>

      {mounted && (
        <>
          <div className="botoes-secundarios">
            <button onClick={salvarCache}>Salvar no Cache</button>
            <button onClick={limparCache}>Limpar Cache</button>
          </div>

          {data ? (
            <ul>
              {data.slice(0, 10).map((post) => (
                <li key={post.id}>{post.title}</li>
              ))}
            </ul>
          ) : (
            <p>Carregando...</p>
          )}
        </>
      )}
    </div>
  );
}
