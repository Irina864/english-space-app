import Topic from '../Topic/Topic';
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
    <main className="main">
      <section className="main__table">
        <Input />
        {data.map((i, index) => (
          <Topic
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
      </section>
    </main>
  );
}
export default Table;
