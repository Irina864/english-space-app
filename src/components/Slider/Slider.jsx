import { useContext, useState, useEffect } from 'react';
import { wordStoreContext } from '../../store/store';
import { useParams } from 'react-router-dom';

import Card from '../Card/Card';
import ImageButton from '../ImageButton/ImageButton';
import arrowLeftImage from '../../images/arrow-left.png';
import arrowRightImage from '../../images/arrow-right.png';
import './Slider.css';
function Slider() {
  const dictionaryWords = useContext(wordStoreContext).words;
  const { index } = useParams();
  const initialIndex = index ? parseInt(index, 10) : 0;
  const [showedCardIndex, setShowedCardIndex] = useState(
    index ? parseInt(index, 10) : 0
  );
  useEffect(() => {
    setShowedCardIndex(initialIndex);
  }, [initialIndex]);

  const handleShowedCardIndexLeft = () => {
    showedCardIndex - 1 === -1
      ? setShowedCardIndex(showedCardIndex)
      : setShowedCardIndex(showedCardIndex - 1);
  };
  const handleShowedCardIndexRigth = () => {
    showedCardIndex + 1 < dictionaryWords.length
      ? setShowedCardIndex(showedCardIndex + 1)
      : setShowedCardIndex(0);
  };

  const [wordIsAdded, setWordIsAdded] = useState([]);
  const [count, setCount] = useState(0);
  const handleWordIsAdded = (addingWordId) => {
    setWordIsAdded(new Set([...wordIsAdded, addingWordId]));
  };
  useEffect(() => {
    if (wordIsAdded.size !== 0) {
      setCount(wordIsAdded.size);
    }
  }, [wordIsAdded]);
  return (
    <div className="slider">
      <div className="counter">Вы знаете: {count} &#40;слов&#41;</div>
      <div className="slider__box">
        <div
          className="slider__cardchangerbtn"
          onClick={handleShowedCardIndexLeft}
        >
          <ImageButton
            src={arrowLeftImage}
            alt="arrow-left"
            theme="sliderBtn"
          />
        </div>
        <Card
          key={dictionaryWords[showedCardIndex].id}
          id={dictionaryWords[showedCardIndex].id}
          index={showedCardIndex}
          english={dictionaryWords[showedCardIndex].english}
          transcription={dictionaryWords[showedCardIndex].transcription}
          russian={dictionaryWords[showedCardIndex].russian}
          tags={dictionaryWords[showedCardIndex].tags}
          tags_json={dictionaryWords[showedCardIndex].tags_json}
          onClickAddCount={() =>
            handleWordIsAdded(dictionaryWords[showedCardIndex].id)
          }
        />
        <div
          className="slider__cardchangerbtn"
          onClick={handleShowedCardIndexRigth}
        >
          <ImageButton
            src={arrowRightImage}
            alt="arrow-right"
            theme="sliderBtn"
          />
        </div>
      </div>
    </div>
  );
}
export default Slider;
