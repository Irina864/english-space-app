import { useState } from 'react';
import Topic from '../Topic/Topic';
import Input from '../Input/Input';
import './Table.css';
import Slider from '../Slider/Slider';

function Table(props) {
    const data = props.data;
    const [selectedPageMode, setSelectedPageMode] = useState(null);
    const [clickedIndex, setClickedIndex] = useState(0);
    // const navigate = useNavigate();
    // const handleSelectedPageMode = () => {
    //     const currentPath = window.location.pathname;
    //     const newPath = `${currentPath}/cards`;
    //     navigate(newPath);
    // };
    const handleSelectedPageMode = () => {
        setSelectedPageMode(!selectedPageMode);
    };
    let originalBoolean = false;

    return (
        <main className="main">
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
                                tags_json={i.tags_json}
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
