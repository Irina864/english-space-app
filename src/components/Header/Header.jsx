import './Header.css';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

import logoImage from '../../images/logo.png';

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__image-wrap">
        <img className="header__image" src={logoImage} alt="logo" />
      </Link>
      <Navbar />
    </header>
  );
}
export default Header;
