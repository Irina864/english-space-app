import { useState } from 'react';
import Item from '../Item/Item';
import ImageButton from '../ImageButton/ImageButton';
import iconSave from '../../images/icon-save.png';
import iconCancel from '../../images/icon-cancel.png';
import './Input.css';

function Input({ index, english, transcription, russian, tags, ...props }) {
  const [returnedValue, setReturnedValue] = useState(false);
  const handleReturnedValue = () => {
    state.english === '' &&
    state.transcription === '' &&
    state.russian === '' &&
    state.tags === ''
      ? setReturnedValue(returnedValue)
      : setReturnedValue(!returnedValue);
  };
  let originalBoolean = false;
  const [state, setState] = useState({
    english: english || '',
    transcription: transcription || '',
    russian: russian || '',
    tags: tags || '',
  });
  const [disabled, setDisabled] = useState(false);
  const handleChangeState = (e) => {
    const value = e.target.value;
    const fieldName = e.target.name;
    setState((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
    if (value === '') {
      setDisabled(true);
      e.target.className = 'input__item empty';
    } else {
      setDisabled(false);
      e.target.className = 'input__item';
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const mistakes = [];
    const states = Object.keys(state);
    states.forEach((item) => {
      if (state[item] === '') {
        mistakes.push('empty input');
      }
    });
    if (mistakes.length === 0) {
      console.log(state);
      setReturnedValue(!returnedValue);
    } else {
      alert(`Заполните все поля формы!`);
    }
  };

  return returnedValue ? (
    <Item
      index={index}
      english={english}
      transcription={transcription}
      russian={russian}
      tags={tags}
      boolean={originalBoolean}
      {...props}
    />
  ) : (
    <form name="form" className="input" onSubmit={handleSubmit}>
      <div className="input__word">
        <input
          name="english"
          className="input__item"
          type="text"
          value={state.english}
          onChange={handleChangeState}
          placeholder="английское"
        />
        <input
          name="transcription"
          className="input__item"
          type="text"
          value={state.transcription}
          onChange={handleChangeState}
          placeholder="транскрипция"
        />
        <input
          name="russian"
          className="input__item"
          type="text"
          value={state.russian}
          onChange={handleChangeState}
          placeholder="русское"
        />
        <input
          name="tags"
          className="input__item"
          type="text"
          value={state.tags}
          onChange={handleChangeState}
          placeholder="тема"
        />
      </div>
      <div className="input__buttons">
        <ImageButton
          src={iconSave}
          alt="Save"
          theme="save"
          disabled={disabled}
          onClick={handleSubmit}
        />
        <ImageButton
          src={iconCancel}
          alt="Cancel"
          theme="cancel"
          onClick={handleReturnedValue}
        />
      </div>
    </form>
  );
}

export default Input;
