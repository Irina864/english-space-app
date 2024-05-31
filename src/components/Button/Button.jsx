import './Button.css';

function Button(props) {
    const btnClass = 'btn ' + props.theme;
    return <button className={btnClass}>{props.name}</button>;
}
export default Button;
