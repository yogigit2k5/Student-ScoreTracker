const Header = ({ title }) => {
  return (
    <header className="app-header">
      <h1>{title}</h1>
      <p className="subtitle">Track Your Progress</p>
    </header>
  );
};

export default Header;