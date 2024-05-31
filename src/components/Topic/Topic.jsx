import Button from '../Button/Button';
import './Topic.css';

function Topic(props) {
    return (
        <div className="topic">
            <div className="topic__word">
                <div className="topic__eng topic_item">{props.word}</div>
                <div className="topic__transcription topic_item">
                    {props.transcription}
                </div>
                <div className="topic__rus topic_item">{props.translation}</div>
            </div>
            <div className="topic__buttons">
                <Button name="Edit" theme="edit" />
                <Button name="Delete" theme="delete" />
            </div>
        </div>
    );
}
export default Topic;
