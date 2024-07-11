import Item from '../Item/Item';
import Input from '../Input/Input';
import './Table.css';
import { useNavigate } from 'react-router-dom';

function Table(props) {
  const data = props.data;
  const navigate = useNavigate();
  const handleCardClick = (index) => {
    navigate(`/cards/${index}`);
  };
  return (
    <main className="table">
      <Input />
      {data.map((i, index) => (
        <Item
          key={i.id}
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
