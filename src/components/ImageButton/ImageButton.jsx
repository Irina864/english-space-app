import './ImageButton.css';

function ImageButton(props) {
  return (
    <button className="imagebtn">
      <img className="imagebtn__image" src={props.src} alt={props.alt} />
    </button>
  );
}
export default ImageButton;
