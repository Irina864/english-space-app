import { useState } from 'react';
import Topic from '../Topic/Topic';
import Button from '../Button/Button';
import './Input.css';

function Input({ index, english, transcription, russian, tags, ...props }) {
  const [returnedValue, setReturnedValue] = useState(false);
  const [inputValueEng, setInputValueEng] = useState(english);
  const [inputValueTranscription, setInputValueTranscription] =
    useState(transcription);
  const [inputValueRus, setInputValueRus] = useState(russian);
  const [inputValueTag, setInputValueTag] = useState(tags);
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
      index={index}
      english={english}
      transcription={transcription}
      russian={russian}
      tags={tags}
      boolean={originalBoolean}
      {...props}
    />
  ) : (
    <div className="input">
      <div className="input__word">
        {english ? (
          <input
            className="input__eng input_item"
            type="text"
            placeholder={english}
            value={inputValueEng}
            onChange={handleInputValueEng}
          />
        ) : (
          <input className="input__eng input_item" type="text" />
        )}
        {transcription ? (
          <input
            className="input__transcription input_item"
            type="text"
            placeholder={transcription}
            value={inputValueTranscription}
            onChange={handleInputValueTranscription}
          />
        ) : (
          <input className="input__transcription input_item" type="text" />
        )}
        {russian ? (
          <input
            className="input__rus input_item"
            type="text"
            placeholder={russian}
            value={inputValueRus}
            onChange={handleInputValueRus}
          />
        ) : (
          <input className="input__rus input_item" type="text" />
        )}
        {tags ? (
          <input
            className="input__rus input_item"
            type="text"
            placeholder={tags}
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
