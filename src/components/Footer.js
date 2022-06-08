import React from "react";
import styles from "./Footer.module.css";
import { Facebook } from "./Icons";
import { Twitter } from "./Icons";
import { Instagram } from "./Icons";
import { LinkedIn } from "./Icons";
import { Pinterest } from "./Icons";

const Footer = () => {
    return(
        <footer>
            <section className={styles.icons}>
                <Facebook/>
                <Twitter/>
                <Instagram/>
                <LinkedIn/>
                <Pinterest/>
            </section>
            <nav className={styles.footerNav}>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#products">Products</a></li>
                    <li><a href="#review">Review</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#blogs">Blogs</a></li>
                </ul>
            </nav>
            <p className={styles.copyright}>created by <a href="https://github.com/itsDonya" className={styles.footerOrange} title="Love You">2nya</a> | all rights reserved</p>
        </footer>
    )
}

export default Footer;