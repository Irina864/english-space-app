import { useState } from 'react';
import Topic from '../Topic/Topic';
import Input from '../Input/Input';
import Button from '../Button/Button';
import data from '../../data/data.json';
import './Table.css';
import Slider from '../Slider/Slider';

function Table() {
    const [selectedPageMode, setSelectedPageMode] = useState(false);
    const [clickedIndex, setClickedIndex] = useState(0);
    const handleSelectedPageMode = () => {
        setSelectedPageMode(!selectedPageMode);
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
                    <Slider data={data} index={clickedIndex} />
                </section>
            ) : (
                <section className="main__table">
                    <Input />
                    {data.map((i, index) => (
                        <div onClick={handleSelectedPageMode}>
                            <Topic
                                key={i.id}
                                index={index}
                                english={i.english}
                                transcription={i.transcription}
                                russian={i.russian}
                                tags={i.tags}
                                boolean={originalBoolean}
                                clickedCard={(clickedIndex) =>
                                    setClickedIndex(clickedIndex)
                                }
                            />
                        </div>
                    ))}
                </section>
            )}
        </main>
    );
}
export default Table;
