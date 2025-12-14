/**Button: принимает свойство label (текст кнопки) и свойство-обработчик onClickHandler. Отображает кнопку с текстом из label. При нажатии вызывает функцию, переданную через onClickHandler. */

export default function Button({label, onClickHandler}){
    return (
        <button onClick={onClickHandler}>{label}</button>
    );
}