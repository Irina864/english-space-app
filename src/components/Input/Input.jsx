import { useState } from 'react';
import Topic from '../Topic/Topic';
import Button from '../Button/Button';
import './Input.css';

function Input(props) {
    const [returnedValue, setReturnedValue] = useState(false);
    const [inputValueEng, setInputValueEng] = useState('');
    const [inputValueTranscription, setInputValueTranscription] = useState('');
    const [inputValueRus, setInputValueRus] = useState('');
    const [inputValueTag, setInputValueTag] = useState('');
    const handleReturnedValue = () => {
        setReturnedValue(!returnedValue);
    };
    const handleInputValueEng = (e) => {
        setInputValueEng(e.target.value);
    };
    const handleInputValueTranscription = (e) => {
        setInputValueTranscription(e.target.value);
    };
    const handleInputValueRus = (e) => {
        setInputValueRus(e.target.value);
    };
    const handleInputValueTag = (e) => {
        setInputValueTag(e.target.value);
    };
    let originalBoolean = false;
    return returnedValue ? (
        <Topic
            key={props.id}
            english={props.english}
            transcription={props.transcription}
            russian={props.russian}
            tags={props.tags}
            boolean={originalBoolean}
        />
    ) : (
        <div className="input">
            <div className="input__word">
                {props.english ? (
                    <input
                        className="input__eng input_item"
                        type="text"
                        placeholder={props.english}
                        value={inputValueEng}
                        onChange={handleInputValueEng}
                    />
                ) : (
                    <input className="input__eng input_item" type="text" />
                )}
                {props.transcription ? (
                    <input
                        className="input__transcription input_item"
                        type="text"
                        placeholder={props.transcription}
                        value={inputValueTranscription}
                        onChange={handleInputValueTranscription}
                    />
                ) : (
                    <input
                        className="input__transcription input_item"
                        type="text"
                    />
                )}
                {props.russian ? (
                    <input
                        className="input__rus input_item"
                        type="text"
                        placeholder={props.russian}
                        value={inputValueRus}
                        onChange={handleInputValueRus}
                    />
                ) : (
                    <input className="input__rus input_item" type="text" />
                )}
                {props.tags ? (
                    <input
                        className="input__rus input_item"
                        type="text"
                        placeholder={props.tags}
                        value={inputValueTag}
                        onChange={handleInputValueTag}
                    />
                ) : (
                    <input className="input__rus input_item" type="text" />
                )}
            </div>
            <div className="input__buttons">
                <div className="input__btn">
                    <Button name="Save" theme="save" />
                </div>
                <div className="input__btn" onClick={handleReturnedValue}>
                    <Button name="Cancel" theme="delete" />
                </div>
            </div>
        </div>
    );
}

export default Input;
