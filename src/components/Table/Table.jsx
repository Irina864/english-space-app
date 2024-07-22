import Item from '../Item/Item';
import Input from '../Input/Input';
import './Table.css';
import Loading from '../Loading/Loading';
import { useNavigate } from 'react-router-dom';
import { wordStoreContext } from '../../store/store';
import { useContext, useState } from 'react';
import Error from '../Error/Error';

function Table() {
  const dictionary = useContext(wordStoreContext);
  //  Бесконечная загрузка без этого блока
  // Не знаю, как заставить реагировать на изменение dictionary.loading без useState и setTimeout
  const [isLoading, setIsLoading] = useState(dictionary.loading);
  setTimeout(() => {
    setIsLoading(dictionary.loading);
  }, 5000);
  //  Бесконечная загрузка без этого блока

  const navigate = useNavigate();
  const handleCardClick = (index) => {
    navigate(`/cards/${index}`);
  };

  return isLoading ? (
    <Loading />
  ) : dictionary.error ? (
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
}
export default Table;
