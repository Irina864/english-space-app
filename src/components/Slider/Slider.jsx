import { useState } from 'react';
import Card from '../Card/Card';
import ImageButton from '../ImageButton/ImageButton';
import arrowLeftImage from '../../images/arrow-left.png';
import arrowRightImage from '../../images/arrow-right.png';
import './Slider.css';

function Slider(props = 'Server unavailable now') {
    const data = props.data;
    const [showedCardIndex, setShowedCardIndex] = useState(
        props.index ? props.index : 0
    );
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
                <ImageButton
                    theme="slider"
                    src={arrowLeftImage}
                    alt="arrow-left"
                />
            </div>
            <Card
                key={data[showedCardIndex].id}
                english={data[showedCardIndex].english}
                transcription={data[showedCardIndex].transcription}
                russian={data[showedCardIndex].russian}
                tags={data[showedCardIndex].tags}
            />
            <div
                className="slider__cardchangerbtn"
                onClick={handleShowedCardIndexRigth}
            >
                <ImageButton
                    theme="slider"
                    src={arrowRightImage}
                    alt="arrow-right"
                />
            </div>
        </div>
    );
}
export default Slider;
