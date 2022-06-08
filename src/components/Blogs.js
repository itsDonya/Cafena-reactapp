import React, {Component} from "react";
import styles from "./Blogs.module.css";
import pic1 from "../img/blog-1.jpeg";
import pic2 from "../img/blog-2.jpeg";
import pic3 from "../img/blog-3.jpeg";
import Button from "./Button";

class Blog extends Component {
    render() {
        const {title, info, text, pic} = this.props;
        return(
            <div className={styles.blog}>
                <section>
                    <img src={pic} className={styles.pic}  alt="Blog Pic" />
                </section>
                <div>
                    <p className={styles.blogTitle}>{title}</p>
                    <p className={styles.blogInfo}>{info}</p>
                    <p className={styles.blogText}>{text}</p>
                    <Button text="read more"/>
                </div>
            </div>
        )
    }
}

class Blogs extends Component {
    constructor() {
        super();
        this.state = {
            title: "tasty and refreshing coffee",
            info: "by admin / 21st May, 2021",
            text: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Non, Dicta."
        }
    }
    render() {
        const {title, info, text} = this.state
        return(
            <article id="blogs">
                <h1 className="title">our <span className="orange">Blogs</span></h1>
                <section className={styles.blogs}>
                    <Blog title={title} info={info} text={text} pic={pic1}/>
                    <Blog title={title} info={info} text={text} pic={pic2}/>
                    <Blog title={title} info={info} text={text} pic={pic3}/>
                </section>
            </article>
        )
    }
}

export default Blogs;