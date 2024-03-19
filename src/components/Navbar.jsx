import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <div className="navbar_logo">
          <img src={logo} alt="" />
        </div>
      </NavLink>
      <div className="navbar_link">
        <NavLink to="/">
          <div className="home">Acceuil</div>
        </NavLink>
        <NavLink to="/about">
          <div className="about">A Propos</div>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
