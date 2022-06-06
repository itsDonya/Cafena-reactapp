import React, {Component} from "react";
import styles from "./Menu.module.css";
import MenuItem from "./Menu-item";
import pic1 from "../img/menu-1.png";
import pic2 from "../img/menu-2.png";
import pic3 from "../img/menu-3.png";
import pic4 from "../img/menu-4.png";
import pic5 from "../img/menu-5.png";
import pic6 from "../img/menu-6.png";

class Menu extends Component {
    constructor() {
        super();
        this.state = {
            title: "tasty and healthy",
            price: "$15.99",
            original: "$20.99"
        }
    }
    render() {
        const {title, price, original} = this.state;
        return(
            <article id="menu">

                <h1 className="title">our <span className="orange">menu</span></h1>

                <section className={styles.container}>

                    <MenuItem pic={pic1} title={title} price={price} original={original} />
                    <MenuItem pic={pic2} title={title} price={price} original={original} />
                    <MenuItem pic={pic3} title={title} price={price} original={original} />
                    <MenuItem pic={pic4} title={title} price={price} original={original} />
                    <MenuItem pic={pic5} title={title} price={price} original={original} />
                    <MenuItem pic={pic6} title={title} price={price} original={original} />

                </section>
            </article>
        )
    }
}

export default Menu;