import { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './Topic.css';

import { useNavigate } from 'react-router-dom';

function Topic(props) {
    // Для переключения в Slider (начало)

    const [clickedIndex, setClickedIndex] = useState(0);
    const navigate = useNavigate();
    const handleClickedIndex = () => {
        setClickedIndex(props.index);
        const newPath = `/cards`;
        navigate(newPath);
    };
    console.log(clickedIndex);

    // Для переключения в Slider (конец)

    const [editingWordMode, setEditingWordMode] = useState(false);
    const handleEditingWordMode = () => {
        setEditingWordMode(!editingWordMode);
    };
    return editingWordMode ? (
        <Input {...props} />
    ) : (
        <div className="topic">
            {/* Для переключения в Slider (начало) */}

            <div className="topic__word" onClick={handleClickedIndex}>
                {/* <div
                className="topic__word"
                onClick={() => props.clickedCard(props.index)}
            > */}

                {/* Для переключения в Slider (конец) */}

                <div className="topic__eng topic_item">{props.english}</div>
                <div className="topic__transcription topic_item">
                    {props.transcription}
                </div>
                <div className="topic__rus topic_item">{props.russian}</div>
                <div className="topic__tag topic_item">{props.tags}</div>
            </div>
            <div className="topic__buttons">
                <div className="topic__btn" onClick={handleEditingWordMode}>
                    <Button name="Edit" theme="edit" />
                </div>
                <div className="topic__btn">
                    <Button name="Delete" theme="delete" />
                </div>
            </div>
        </div>
    );
}

export default Topic;
