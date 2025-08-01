import { Link } from 'react-router-dom';
import ThemeDropdown from './ThemeDropdown';
import './Header.css';

const Header = () => {
  return (
    <header className="app-header fade-in">
      <div className="header-left">
        <div className="logo">🌈 Multi Themed App</div>
      </div>

      <nav className="nav-center">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className="header-right">
        <ThemeDropdown />
      </div>
    </header>
  );
};

export default Header;
