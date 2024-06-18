import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="nav">
            <Link to="/" className="nav__item nav_table">
                Words table
            </Link>
            <Link to="/cards" className="nav__item nav_cards">
                Cards
            </Link>
        </div>
    );
}
export default Navbar;
