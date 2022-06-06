import React, {Component} from "react";
import styles from "./Reviews.module.css";
import pic1 from "../img/pic-1.png";
import pic2 from "../img/pic-2.png";
import pic3 from "../img/pic-3.png";
import quote from "../img/quote-img.png";
import FullStar from "./FullStar";
import HalfStar from "./HalfStar";

class Review extends Component {
    render() {
        const {name, text, pic} = this.props;
        return(
            <div className={styles.review}>
                <img src={quote} className={styles.quote} />
                <p className={styles.text}>{text}</p>
                <img src={pic} className={styles.profile}/>
                <h4 className={styles.name}>{name}</h4>
                <div className={styles.stars}>
                    <FullStar/>
                    <FullStar/>
                    <FullStar/>
                    <FullStar/>
                    <HalfStar/>
                </div>
            </div>
        )
    }
}

class Reviews extends Component {
    constructor() {
        super();
        this.state = {
            name: "john doe",
            text: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Animi Nulla Sit Libero Nemo Fuga Sequi Nobis? Necessitatibus Aut Laborum, Nisi Quas Eaque Laudantium Consequuntur Iste Ex Aliquam Minus Vel? Nemo."
        }
    }
    render() {
        const {name, text} = this.state;
        return(
            <article id="review">
                <h1 className="title">customer's <span className="orange">review</span></h1>
                <section className={styles.reviews}>
                    <Review name={name} text={text} pic={pic1}/>
                    <Review name={name} text={text} pic={pic2}/>
                    <Review name={name} text={text} pic={pic3}/>
                </section>
            </article>
        )
    }
}

export default Reviews;