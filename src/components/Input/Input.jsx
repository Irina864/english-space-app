import { wordStoreContext } from '../../store/store';
import { useContext, useState } from 'react';
import Item from '../Item/Item';
import ImageButton from '../ImageButton/ImageButton';
import iconSave from '../../images/icon-save.png';
import iconCancel from '../../images/icon-cancel.png';
import './Input.css';

function Input({
  id,
  index,
  english,
  transcription,
  russian,
  tags,
  tags_json,
  forAdd,
  ...props
}) {
  const dictionary = useContext(wordStoreContext);
  const dictionaryWords = useContext(wordStoreContext).words;
  const [returnedValue, setReturnedValue] = useState(false);
  const [state, setState] = useState({
    id: id || '',
    english: english || '',
    transcription: transcription || '',
    russian: russian || '',
    tags: tags || '',
    tags_json: tags_json || '',
  });
  const [disabled, setDisabled] = useState(false);
  const handleChangeState = (e) => {
    const value = e.target.value;
    const fieldName = e.target.name;
    setState((prevState) => ({
      ...prevState,
      id:
        prevState.id === ''
          ? dictionaryWords.reduce(
              (max, dictionaryWords) => Math.max(max, dictionaryWords.id),
              0
            ) + 1
          : prevState.id,
      [fieldName]: value,
      tags_json: fieldName === 'tags' ? `["${e.target.value}"]` : '',
    }));
    if (value.trim() === '') {
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
      if (forAdd) {
        dictionary.addNewWord(state);
        setReturnedValue(returnedValue);
        setState({ english: '', transcription: '', russian: '', tags: '' });
      } else {
        dictionary.updateWord(state);
        setReturnedValue(!returnedValue);
      }
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
          placeholder="слово"
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
          placeholder="перевод"
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
        {forAdd ? (
          <ImageButton
            src={iconSave}
            alt="Save"
            theme="save"
            disabled={disabled}
            onClick={handleSubmit}
          />
        ) : (
          <>
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
              onClick={() => {
                setReturnedValue(!returnedValue);
              }}
            />
          </>
        )}
      </div>
    </form>
  );
}

export default Input;
