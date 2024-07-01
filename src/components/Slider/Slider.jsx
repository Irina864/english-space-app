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
  return (
    <div className="slider">
      <div
        className="slider__cardchangerbtn"
        onClick={handleShowedCardIndexLeft}
      >
        <ImageButton src={arrowLeftImage} alt="arrow-left" />
      </div>
      <Card
        key={data[showedCardIndex].id}
        english={data[showedCardIndex].english}
        transcription={data[showedCardIndex].transcription}
        russian={data[showedCardIndex].russian}
        tags={data[showedCardIndex].tags}
        tags_json={data[showedCardIndex].tags_json}
      />
      <div
        className="slider__cardchangerbtn"
        onClick={handleShowedCardIndexRigth}
      >
        <ImageButton src={arrowRightImage} alt="arrow-right" />
      </div>
    </div>
  );
}
export default Slider;
