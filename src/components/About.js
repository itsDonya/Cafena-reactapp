import React from "react";
import styles from "./About.module.css";
import aboutPic from "../img/about-img.jpeg";
import Button from "./Button";

const About = () => {
    return(
        <article id="about" className={styles.about}>
            <h1 className={styles.title}><span className="orange">about</span> us</h1>
            <section className={styles.about_container}>
                <div id="left" className={styles.about_img}>
                    <img src={aboutPic} alt="About pic" />
                </div>
                <div id={styles.right}>
                    <h2 className={styles.about_title}>what makes our coffee special?</h2>
                    <p className={styles.about_text}>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Voluptatibus Qui Ea Ullam, Enim Tempora Ipsum Fuga Alias Quae Ratione A Officiis Id Temporibus Autem? Quod Nemo Facilis Cupiditate. Ex, Vel?</p>
                    <p className={styles.about_text}>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Odit Amet Enim Quod Veritatis, Nihil Voluptas Culpa! Neque Consectetur Obcaecati Sapiente?</p>
                    <Button text="Learn More"/>
                </div>
            </section>
        </article>
    )
}

export default About;