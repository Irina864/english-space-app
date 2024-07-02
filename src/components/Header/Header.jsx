import './Header.css';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

import logoImage from '../../images/cat-british-big_eyes.png';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__image-wrap">
          <img className="header__image" src={logoImage} alt="logo" />
        </Link>
        <Link to="/" className="header__title-wrap">
          <h1 className="header__title">English words</h1>
        </Link>
        <Navbar />
      </div>
    </header>
  );
}
export default Header;
