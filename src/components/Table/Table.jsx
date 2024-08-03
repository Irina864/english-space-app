import Item from '../Item/Item';
import Input from '../Input/Input';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import './Table.css';
import React, { useContext, useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { wordStoreContext } from '../../store/store';
import { useNavigate } from 'react-router-dom';

const Table = observer(() => {
  const dictionary = useContext(wordStoreContext);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dictionary.loadDictionary();
        setIsLoading(dictionary.loading);
        setError(dictionary.error);
      } catch (error) {
        setError(true);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [dictionary]);

  const navigate = useNavigate();
  const handleCardClick = (index) => {
    navigate(`/cards/${index}`);
  };

  return isLoading ? (
    <Loading />
  ) : error ? (
    <Error />
  ) : (
    <main className="table">
      <Input forAdd={true} />
      {dictionary.words.map((i, index) => (
        <Item
          key={i.id}
          id={i.id}
          index={index}
          english={i.english}
          transcription={i.transcription}
          russian={i.russian}
          tags={i.tags}
          tags_json={i.tags_json}
          onCardClick={() => handleCardClick(index)}
        />
      ))}
    </main>
  );
});

export default Table;
