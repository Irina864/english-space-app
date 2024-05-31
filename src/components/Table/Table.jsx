import Topic from '../Topic/Topic';
import Input from '../Input/Input';
import data from '../../data/data.json';
import './Table.css';

function Table() {
    return (
        <main className="table">
            <Input />
            {data.map((i) =>
                i.boolean ? (
                    <Topic
                        key={i.id}
                        word={i.word}
                        transcription={i.transcription}
                        translation={i.translation}
                        theme={i.theme}
                        boolean={i.boolean}
                    />
                ) : (
                    <Input
                        key={i.id}
                        word={i.word}
                        transcription={i.transcription}
                        translation={i.translation}
                        theme={i.theme}
                    />
                )
            )}
        </main>
    );
}
export default Table;
