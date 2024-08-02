import ImageButton from '../ImageButton/ImageButton';
import Input from '../Input/Input';
import iconEdit from '../../images/icon-edit.png';
import iconDelete from '../../images/icon-delete.png';
import './Item.css';
import { useState, useContext } from 'react';
import { DataContext } from '../context';

function Item({
  id,
  index,
  english,
  transcription,
  russian,
  tags,
  onCardClick,
  ...props
}) {
  const { deleteWord } = useContext(DataContext);
  const [editingWordMode, setEditingWordMode] = useState(false);
  const handleEditingWordMode = () => {
    setEditingWordMode(!editingWordMode);
  };
  return editingWordMode ? (
    <Input
      id={id}
      index={index}
      english={english}
      transcription={transcription}
      russian={russian}
      tags={tags}
      {...props}
    />
  ) : (
    <div className="item">
      <div className="item__word" onClick={onCardClick}>
        <div className="item__item">{english}</div>
        <div className="item__item">{transcription}</div>
        <div className="item__item">{russian}</div>
        <div className="item__item">{tags}</div>
      </div>
      <div className="item__buttons">
        <ImageButton
          src={iconEdit}
          alt="Edit"
          theme="edit"
          onClick={handleEditingWordMode}
        />
        <ImageButton
          src={iconDelete}
          alt="Delete"
          theme="delete"
          onClick={() => deleteWord(id)}
        />
      </div>
    </div>
  );
}

export default Item;
