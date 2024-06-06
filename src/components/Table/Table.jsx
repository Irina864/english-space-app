import Topic from '../Topic/Topic';
import Input from '../Input/Input';
import Card from '../Card/Card';
import { useState } from 'react';
import data from '../../data/data.json';
import './Table.css';
import Button from '../Button/Button';

function Table() {
    const [selectedPageMode, setSelectedPageMode] = useState(false);
    // const [editingMode, setEditingMode] = useState(false);
    const [showedCardIndex, setShowedCardIndex] = useState(0);
    // const [selectedCard, setSelectedCard] = useState(false);
    // const handleSelectedCard = () => {
    //     setSelectedCard(!selectedCard);
    // };
    // const handleEditingMode = () => {
    //     setEditingMode(!editingMode);
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
                        <Button name="left" theme="show" />
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
                        <Button name="right" theme="show" />
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
            {/* <section className="main__card">
                <Card
                    key={data[0].id}
                    english={data[0].english}
                    transcription={data[0].transcription}
                    russian={data[0].russian}
                    tags={data[0].tags}
                />
            </section>
            <section className="main__table">
                <Input />
                {data.map((i) =>
                    i.boolean ? (
                        <div onClick={handleCheckedCard}>
                            <Topic
                                key={i.id}
                                english={i.english}
                                transcription={i.transcription}
                                russian={i.russian}
                                tags={i.tags}
                                boolean={i.boolean}
                            />
                        </div>
                    ) : (
                        <Input
                            key={i.id}
                            english={i.english}
                            transcription={i.transcription}
                            russian={i.russian}
                            tags={i.tags}
                        />
                    )
                )}
            </section> */}
        </main>
    );
}
export default Table;
