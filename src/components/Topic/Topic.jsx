import { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './Topic.css';

function Topic({
  index,
  english,
  transcription,
  russian,
  tags,
  onCardClick,
  ...props
}) {
  const [editingWordMode, setEditingWordMode] = useState(false);
  const handleEditingWordMode = () => {
    setEditingWordMode(!editingWordMode);
  };
  return editingWordMode ? (
    <Input
      index={index}
      english={english}
      transcription={transcription}
      russian={russian}
      tags={tags}
      {...props}
    />
  ) : (
    <div className="topic">
      <div className="topic__word" onClick={onCardClick}>
        <div className="topic__eng topic_item">{english}</div>
        <div className="topic__transcription topic_item">{transcription}</div>
        <div className="topic__rus topic_item">{russian}</div>
        <div className="topic__tag topic_item">{tags}</div>
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
