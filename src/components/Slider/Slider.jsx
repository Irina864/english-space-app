import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import Card from '../Card/Card';
import ImageButton from '../ImageButton/ImageButton';
import arrowLeftImage from '../../images/arrow-left.png';
import arrowRightImage from '../../images/arrow-right.png';
import './Slider.css';
import React, { useContext, useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import { wordStoreContext } from '../../store/store';

const Slider = observer(() => {
  const dictionary = useContext(wordStoreContext);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const { index } = useParams();
  const initialIndex = index ? parseInt(index, 10) : 0;
  const [showedCardIndex, setShowedCardIndex] = useState(initialIndex);
  const [wordIsAdded, setWordIsAdded] = useState(new Set());
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dictionary.loadDictionary();
        setIsLoading(dictionary.loading);
        setError(dictionary.error);
      } catch (error) {
        setError(true);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [dictionary]);

  useEffect(() => {
    setShowedCardIndex(initialIndex);
  }, [initialIndex]);

  const handleShowedCardIndexLeft = () => {
    setShowedCardIndex(
      showedCardIndex === 0 ? showedCardIndex : showedCardIndex - 1
    );
  };

  const handleShowedCardIndexRight = () => {
    setShowedCardIndex(
      showedCardIndex + 1 < dictionary.words.length ? showedCardIndex + 1 : 0
    );
  };

  const handleWordIsAdded = (addingWordId) => {
    setWordIsAdded(new Set([...wordIsAdded, addingWordId]));
  };

  useEffect(() => {
    setCount(wordIsAdded.size);
  }, [wordIsAdded]);

  return isLoading ? (
    <Loading />
  ) : error ? (
    <Error />
  ) : (
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
        {dictionary.words.length > 0 && (
          <Card
            key={dictionary.words[showedCardIndex].id}
            id={dictionary.words[showedCardIndex].id}
            index={showedCardIndex}
            english={dictionary.words[showedCardIndex].english}
            transcription={dictionary.words[showedCardIndex].transcription}
            russian={dictionary.words[showedCardIndex].russian}
            tags={dictionary.words[showedCardIndex].tags}
            tags_json={dictionary.words[showedCardIndex].tags_json}
            onClickAddCount={() =>
              handleWordIsAdded(dictionary.words[showedCardIndex].id)
            }
          />
        )}
        <div
          className="slider__cardchangerbtn"
          onClick={handleShowedCardIndexRight}
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
});

export default Slider;
