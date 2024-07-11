import './MissingPage.css';
import image from '../../images/cat-two-bows-sitting.png';
import { Link } from 'react-router-dom';

function MissingPage() {
  return (
    <main className="missing">
      <div className="missing__imagewrap">
        <img className="missing__image" src={image} alt="404 Error" />
      </div>
      <div className="missing__textwrap">
        <h1 className="missing__title">404 Страница не найдена &#58;&#40;</h1>
        <p className="missing__text">Пожалуйста, вернитесь</p>
        <Link to="/" className="missing__text">
          на главную страницу
        </Link>
      </div>
    </main>
  );
}
export default MissingPage;
