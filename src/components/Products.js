import React, {Component} from "react";
import styles from "./Products.module.css";
import pic1 from "../img/product-1.png";
import pic2 from "../img/product-2.png";
import pic3 from "../img/product-3.png";
import FullStar from "./FullStar";
import HalfStar from "./HalfStar";

class Product extends Component {
    render() {
        const {name, price, original, pic} = this.props;
        return(
            <div className={styles.product}>
                        <div className={styles.buttons}>
                            {/* Cart icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z"/></svg>
                            {/* Heart icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"/></svg>
                            {/* Eye icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M279.6 160.4C282.4 160.1 285.2 160 288 160C341 160 384 202.1 384 256C384 309 341 352 288 352C234.1 352 192 309 192 256C192 253.2 192.1 250.4 192.4 247.6C201.7 252.1 212.5 256 224 256C259.3 256 288 227.3 288 192C288 180.5 284.1 169.7 279.6 160.4zM480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6V112.6zM288 112C208.5 112 144 176.5 144 256C144 335.5 208.5 400 288 400C367.5 400 432 335.5 432 256C432 176.5 367.5 112 288 112z"/></svg>
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