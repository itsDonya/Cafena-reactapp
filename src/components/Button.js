import react from "react";
import styles from "./Button.module.css";

class Button extends react.Component {
    render() {
        return(
            <button className={styles.btn}>{this.props.text}</button>
        )
    }
}

export default Button;