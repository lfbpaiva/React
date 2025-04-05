import { useState } from 'react';

export default function NavMenu() {
  const [active, setActive] = useState('Início');

  const items = ['Início', 'Sobre', 'Contato'];

  return (
    <nav className="nav-menu">
      <ul>
        {items.map((item) => (
          <li
            key={item}
            className={active === item ? 'active' : ''}
            onClick={() => setActive(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}