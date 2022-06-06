import React, {Component} from "react";
import styles from "./Products.module.css";
import pic1 from "../img/product-1.png";
import pic2 from "../img/product-2.png";
import pic3 from "../img/product-3.png";
import FullStar from "./FullStar";
import HalfStar from "./HalfStar";
import { Cart } from "./Icons";
import { Heart } from "./Icons";
import { Eye } from "./Icons";

class Product extends Component {
    render() {
        const {name, price, original, pic} = this.props;
        return(
            <div className={styles.product}>
                        <div className={styles.buttons}>
                            <Cart/>
                            <Heart/>
                            <Eye/>
                        </div>
                        <img src={pic} alt="Product" className={styles.pic} />
                        <h4 className={styles.name}>{name}</h4>
                        <div className={styles.stars}>
                            <FullStar/>
                            <FullStar/>
                            <FullStar/>
                            <FullStar/>
                            <HalfStar/>
                        </div>
                        <p className={styles.price}>{price}<span className={styles.original}>{original}</span></p>
                    </div>
        )
    }
}
class Products extends Component {
    constructor() {
        super();
        this.state = {
            name: "Fresh Coffee",
            price: "15.99",
            original: "20.99"
        }
    }
    render() {
        const {name, price, original} = this.state;
        return(
            <article id="products">
                <h1 className="title"><span className="orange">our</span> products</h1>
                <section className={styles.products}>
                    <Product name={name} price={price} original={original} pic={pic1}/>
                    <Product name={name} price={price} original={original} pic={pic2}/>
                    <Product name={name} price={price} original={original} pic={pic3}/>
                </section>
            </article>
        )
    }
}

export default Products;