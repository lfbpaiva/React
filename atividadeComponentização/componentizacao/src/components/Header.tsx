import Logo from './Logo';

export default function Header() {
  return (
    <header className="header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Logo />
      <h1 style={{ textTransform: 'uppercase', margin: 0 }}>Painel de Posts</h1>
    </header>
  );
}