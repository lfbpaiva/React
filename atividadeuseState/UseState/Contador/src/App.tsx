import { useState } from 'react'
import './App.css'

export default function App() {
  const [contador, setContador] = useState(0)

  const incrementar = () => setContador(contador + 1)
  const decrementar = () => setContador(contador - 1)
  const redefinir = () => setContador(0)

  return (
    <div className="container">
      <h1>Contador</h1>

      <p>Valor: {contador}</p>

      <div className="buttons">
        <button onClick={incrementar}>Adicionar</button>
        <button onClick={decrementar}>Diminuir</button>
        <button className="reset-button" onClick={redefinir}>Redefinir</button>
      </div>
    </div>
  )
}
