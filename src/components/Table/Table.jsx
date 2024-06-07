import { useState } from 'react';
import Topic from '../Topic/Topic';
import Input from '../Input/Input';
import Card from '../Card/Card';
import Button from '../Button/Button';
import ImageButton from '../ImageButton/ImageButton';
import arrowLeftImage from '../../images/arrow-left.png';
import arrowRightImage from '../../images/arrow-right.png';
import data from '../../data/data.json';
import './Table.css';

function Table() {
    const [selectedPageMode, setSelectedPageMode] = useState(false);

    const [showedCardIndex, setShowedCardIndex] = useState(0);
    // const [selectedCard, setSelectedCard] = useState(false);
    // const handleSelectedCard = () => {
    //     setSelectedCard(!selectedCard);
    // };

    const handleSelectedPageMode = () => {
        setSelectedPageMode(!selectedPageMode);
    };
    const handleShowedCardIndexLeft = () => {
        showedCardIndex - 1 === -1
            ? setShowedCardIndex(showedCardIndex)
            : setShowedCardIndex(showedCardIndex - 1);
    };
    const handleShowedCardIndexRigth = () => {
        showedCardIndex + 1 < data.length
            ? setShowedCardIndex(showedCardIndex + 1)
            : setShowedCardIndex(showedCardIndex);
    };
    let originalBoolean = false;
    return (
        <main className="main">
            <div className="mode">
                {selectedPageMode ? (
                    <div className="mode_btn" onClick={handleSelectedPageMode}>
                        <Button name="Show word table" theme="show" />
                    </div>
                ) : (
                    <div className="mode_btn" onClick={handleSelectedPageMode}>
                        <Button name="Show cards" theme="show" />
                    </div>
                )}
            </div>
            {selectedPageMode ? (
                <section className="main__card">
                    <div
                        className="main__cardchangerbtn"
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
                        className="main__cardchangerbtn"
                        onClick={handleShowedCardIndexRigth}
                    >
                        <ImageButton
                            theme="slider"
                            src={arrowRightImage}
                            alt="arrow-right"
                        />
                    </div>
                </section>
            ) : (
                <section className="main__table">
                    <Input />
                    {data.map(
                        (i) => (
                            <Topic
                                key={i.id}
                                english={i.english}
                                transcription={i.transcription}
                                russian={i.russian}
                                tags={i.tags}
                                boolean={originalBoolean}
                            />
                        )
                        // selectedCard ? (
                        //     <Input
                        //         key={i.id}
                        //         english={i.english}
                        //         transcription={i.transcription}
                        //         russian={i.russian}
                        //         tags={i.tags}
                        //     />
                        // ) : (
                        //     <Topic
                        //         key={i.id}
                        //         english={i.english}
                        //         transcription={i.transcription}
                        //         russian={i.russian}
                        //         tags={i.tags}
                        //     />
                        // )
                    )}
                </section>
            )}
        </main>
    );
}
export default Table;
