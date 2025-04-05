import { useState, useRef, useEffect } from 'react';
import './App.css';

export default function Formulario() {
  const nomeRef = useRef<HTMLInputElement>(null);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    nomeRef.current?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Nome: ${nome}\nEmail: ${email}`);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2 className="form-title">Cadastro</h2>

      <div className="form-group">
        <label className="form-label">Nome:</label>
        <input
          ref={nomeRef}
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="form-input"
          placeholder="Digite seu nome"
        />
      </div>

      <div className="form-group">
        <label className="form-label">E-mail:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input"
          placeholder="Digite seu e-mail"
        />
      </div>

      <button type="submit" className="form-button">Enviar</button>
    </form>
  );
}
