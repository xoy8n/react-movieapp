//prop-types import하기
import propTypes from "prop-types";

//모듈화한 css만 import하기
import styles from "./Button.module.css";


function Button({ text }) {
    return <button className={ styles.btn}>{text}</button>;
}

//prop-types 사용하기
Button.propTypes = {
    text : propTypes.string.isRequired,
}    

export default Button;