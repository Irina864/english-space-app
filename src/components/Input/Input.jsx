import Button from '../Button/Button';
import './Input.css';

function Input(props) {
    return (
        <div className="input">
            <div className="input__word">
                {props ? (
                    <input
                        className="input__eng input_item"
                        type="text"
                        value={props.word}
                    />
                ) : (
                    <input className="input__eng input_item" type="text" />
                )}
                {props ? (
                    <input
                        className="input__transcription input_item"
                        type="text"
                        value={props.transcription}
                    />
                ) : (
                    <input
                        className="input__transcription input_item"
                        type="text"
                    />
                )}
                {props ? (
                    <input
                        className="input__rus input_item"
                        type="text"
                        value={props.translation}
                    />
                ) : (
                    <input className="input__rus input_item" type="text" />
                )}
            </div>
            <div className="input__buttons">
                <Button name="Save" theme="save" />
                <Button name="Cancel" theme="delete" />
            </div>
        </div>
    );
}
export default Input;
