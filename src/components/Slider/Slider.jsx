import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Card from '../Card/Card';
import ImageButton from '../ImageButton/ImageButton';
import arrowLeftImage from '../../images/arrow-left.png';
import arrowRightImage from '../../images/arrow-right.png';
import './Slider.css';
function Slider(props = 'Server unavailable now') {
  const data = props.data;
  const { index } = useParams();
  const initialIndex = index ? parseInt(index, 10) : 0;
  const [showedCardIndex, setShowedCardIndex] = useState(
    index ? parseInt(index, 10) : 0
  );
  useEffect(() => {
    setShowedCardIndex(initialIndex);
  }, [initialIndex]);
  const [count, setCount] = useState(0);

  const handleShowedCardIndexLeft = () => {
    showedCardIndex - 1 === -1
      ? setShowedCardIndex(showedCardIndex)
      : setShowedCardIndex(showedCardIndex - 1);
  };
  const handleShowedCardIndexRigth = () => {
    showedCardIndex + 1 < data.length
      ? setShowedCardIndex(showedCardIndex + 1)
      : setShowedCardIndex(0);
  };
  const handleCount = (e) => {
    setCount(count + 1);
  };
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
          key={data[showedCardIndex].id}
          index={showedCardIndex}
          english={data[showedCardIndex].english}
          transcription={data[showedCardIndex].transcription}
          russian={data[showedCardIndex].russian}
          tags={data[showedCardIndex].tags}
          tags_json={data[showedCardIndex].tags_json}
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
  );
}
export default Slider;
