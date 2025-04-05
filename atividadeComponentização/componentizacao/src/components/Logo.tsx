import positLogo from '../assets/posit.jpg';

export default function Logo() {
  return (
    <img
      src={positLogo}
      alt="Logo"
      style={{
        width: '50px',
        height: '50px',
        borderRadius: '8px',
        marginRight: '1rem'
      }}
    />
  );
}