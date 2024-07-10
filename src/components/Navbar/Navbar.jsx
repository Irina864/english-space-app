import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="nav">
      <Link to="/" className="nav__item nav_table">
        Таблица
      </Link>
      <Link to="/cards/0" className="nav__item nav_cards">
        Карточки
      </Link>
    </div>
  );
}
export default Navbar;
