import { useEffect, useState } from 'react'
import './App.css'

interface Amiibo {
  name: string;
  image: string;
  tail: string;
}

export default function App() {
  const [amiibos, setAmiibos] = useState<Amiibo[]>([]);

  useEffect(() => {
    fetch('https://www.amiiboapi.com/api/amiibo')
      .then(res => res.json())
      .then(data => {
        setAmiibos(data.amiibo);
      })
      .catch(err => console.error("Erro ao buscar os dados:", err));
  }, []);

  return (
    <div className="container">
      <h1>Lista de Amiibos</h1>
      <div className="lista">
        {amiibos.map((amiibo) => (
          <div key={amiibo.tail} className="card">
            <img src={amiibo.image} alt={amiibo.name} />
            <p>{amiibo.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
