import Button from '../Button/Button';
import image from '../../images/kitten.png';
import './Card.css';
import { useState, useEffect, useRef } from 'react';

function Card({ id, english, transcription, russian, onClickAddCount }) {
  const [showedTranslation, setShowedTranslation] = useState(false);
  const handleShowedTranslation = () => {
    setShowedTranslation(!showedTranslation);
  };

  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  }, []);

  return (
    <main className="card">
      <div className="card__word">
        <div className="card__eng card_item">{english}</div>
        <div className="card__transcription card_item">{transcription}</div>
      </div>
      <div className="card__imagewrap">
        <img className="card__image" src={image} alt="Card cat" />
      </div>
      <div className="card__buttons">
        {showedTranslation ? (
          <div className="card__rus card_item">{russian}</div>
        ) : (
          <Button
            nameButton="Показать перевод"
            theme="show"
            onClick={handleShowedTranslation}
            ref={buttonRef}
          />
        )}
        <Button
          nameButton="Я знаю это слово"
          theme="know"
          onClick={() => onClickAddCount(id)}
        />
      </div>
    </main>
  );
}
export default Card;
