import { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './Topic.css';

function Topic(props) {
    const [editingWordMode, setEditingWordMode] = useState(false);
    const handleEditingWordMode = () => {
        setEditingWordMode(!editingWordMode);
    };
    return editingWordMode ? (
        <Input
            key={props.id}
            english={props.english}
            transcription={props.transcription}
            russian={props.russian}
            tags={props.tags}
        />
    ) : (
        <div className="topic">
            <div className="topic__word">
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
