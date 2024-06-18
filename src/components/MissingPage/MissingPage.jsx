import './MissingPage.css';
import image from '../../images/cat-two-bows-sitting.png';

function MissingPage() {
    return (
        <main className="missing">
            <div className="missing__imagewrap">
                <img className="missing__image" src={image} alt="404 Error" />
            </div>
            <div className="missing__textwrap">
                <h1 className="missing__title">
                    404 Page not found &#58;&#40;
                </h1>
                <p className="missing__text">Please, return to main page</p>
            </div>
        </main>
    );
}
export default MissingPage;
