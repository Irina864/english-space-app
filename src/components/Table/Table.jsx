import { useState } from 'react';
import Topic from '../Topic/Topic';
import Input from '../Input/Input';
import './Table.css';
import { useNavigate } from 'react-router-dom';

function Table(props) {
    const data = props.data;
    const [clickedIndex, setClickedIndex] = useState(0);
    const navigate = useNavigate();
    const handleClickedIndex = () => {
        const newPath = `/cards`;
        navigate(newPath);
    };
    let originalBoolean = false;

    return (
        <main className="main">
            <section className="main__table">
                <Input />
                {data.map((i, index) => (
                    <div onClick={handleClickedIndex}>
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
        </main>
    );
}
export default Table;
