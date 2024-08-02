import Card from '../Card/Card';
import Error from '../Error/Error';
import ImageButton from '../ImageButton/ImageButton';
import arrowLeftImage from '../../images/arrow-left.png';
import arrowRightImage from '../../images/arrow-right.png';
import './Slider.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../context';

function Slider() {
  const { dictionary, error } = useContext(DataContext);
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
    showedCardIndex + 1 < dictionary.length
      ? setShowedCardIndex(showedCardIndex + 1)
      : setShowedCardIndex(0);
  };
  const [count, setCount] = useState(0);
  const handleCount = (e) => {
    setCount(count + 1);
  };
  return error === null ? (
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
          key={dictionary[showedCardIndex].id}
          index={showedCardIndex}
          english={dictionary[showedCardIndex].english}
          transcription={dictionary[showedCardIndex].transcription}
          russian={dictionary[showedCardIndex].russian}
          tags={dictionary[showedCardIndex].tags}
          tags_json={dictionary[showedCardIndex].tags_json}
          onClickAddCount={() => handleCount()}
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
  ) : (
    <Error />
  );
}
export default Slider;
