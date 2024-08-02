import Navbar from '../Navbar/Navbar';
import logoImage from '../../images/logo.png';
import './Header.css';
import { Link } from 'react-router-dom';

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
