import React, {Component} from "react";
import styles from "./Menu-item.module.css";
import Button from "./Button";

class MenuItem extends Component {
    render() {
        const {pic, title, price, original} = this.props;
        return(
            <section className={styles.item}>
                <img src={pic} alt="Item pic" />
                <h4 className={styles.title}>{title}</h4>
                <p className={styles.price}>{price}<span className={styles.original}>{original}</span></p>
                <Button text="add to cart" />
            </section>
        )
    }
}

export default MenuItem;