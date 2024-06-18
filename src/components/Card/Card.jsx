import Button from '../Button/Button';
import { useState } from 'react';
import './Card.css';
import image from '../../images/kitten.png';

function Card(props) {
    const [showedTranslation, setShowedTranslation] = useState(false);
    const handleShowedTranslation = () => {
        setShowedTranslation(!showedTranslation);
    };
    return (
        <div className="card">
            <div className="card__word">
                <div className="card__eng card_item">{props.english}</div>
                <div className="card__transcription card_item">
                    {props.transcription}
                </div>
            </div>
            <div className="card__imagewrap">
                <img className="card__image" src={image} alt="Card cat" />
            </div>
            <div className="card__check">
                {showedTranslation ? (
                    <div className="card__rus card_item">{props.russian}</div>
                ) : (
                    <div
                        className="card__button"
                        onClick={handleShowedTranslation}
                    >
                        <Button name="Show translation" theme="show" />
                    </div>
                )}
            </div>
        </div>
    );
}
export default Card;
