import { useState } from 'react';
import Topic from '../Topic/Topic';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Slider from '../Slider/Slider';
import './Table.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Table(props) {
    const data = props.data;

    // Для переключения в Slider (начало)

    // const [clickedIndex, setClickedIndex] = useState('');
    // const navigate = useNavigate();
    // const [selectedPageMode, setSelectedPageMode] = useState(false);
    // const handleSelectedPageMode = () => {
    //     setSelectedPageMode(!selectedPageMode);
    // };

    // useEffect(() => {
    //     const newPath = `/cards`;
    //     navigate(newPath);
    // }, [clickedIndex]);

    // if (clickedIndex !== '') {
    //     const newPath = `/cards`;
    //     navigate(newPath);
    // }
    // console.log(clickedIndex);

    // Для переключения в Slider (конец)

    let originalBoolean = false;
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
                        boolean={originalBoolean}

                        // Для переключения в Slider (начало)

                        // clickedCard={(clickedIndex) =>
                        //     setClickedIndex(clickedIndex)
                        // }

                        // Для переключения в Slider (конец)
                    />
                ))}
            </section>
        </main>
        // <main className="main">
        //     <div className="mode">
        //         {selectedPageMode ? (
        //             <div className="mode_btn" onClick={handleSelectedPageMode}>
        //                 <Button name="Show word table" theme="show" />
        //             </div>
        //         ) : (
        //             <div className="mode_btn" onClick={handleSelectedPageMode}>
        //                 <Button name="Show cards" theme="show" />
        //             </div>
        //         )}
        //     </div>
        //     {selectedPageMode ? (
        //         <section className="main__card">
        //             <Slider data={data} index={clickedIndex} />
        //         </section>
        //     ) : (
        //         <section className="main__table">
        //             <Input />
        //             {data.map((i, index) => (
        //                 <div onClick={handleSelectedPageMode}>
        //                     <Topic
        //                         key={i.id}
        //                         index={index}
        //                         english={i.english}
        //                         transcription={i.transcription}
        //                         russian={i.russian}
        //                         tags={i.tags}
        //                         boolean={originalBoolean}
        //                         clickedCard={(clickedIndex) =>
        //                             setClickedIndex(clickedIndex)
        //                         }
        //                     />
        //                 </div>
        //             ))}
        //         </section>
        //     )}
        // </main>
    );
}
export default Table;
