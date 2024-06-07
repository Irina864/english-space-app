import './ImageButton.css';

function ImageButton(props) {
    const btnClass = 'imagebtn ' + props.theme;
    return (
        <button className={btnClass}>
            <img className="imagebtn__image" src={props.src} alt={props.alt} />
        </button>
    );
}
export default ImageButton;
