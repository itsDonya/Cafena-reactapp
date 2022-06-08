import styles from "./Banner.module.css";
import Button from "./Button";

const Banner = () => {
    return(
        <article id={styles.banner}>
            <h2 className={styles.title}>fresh coffee in the morning</h2>
            <p className={styles.caption}>Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Placeat Labore, Sint Cupiditate Distinctio Tempora Reiciendis.</p>
            <Button text="get yours now"/>
        </article>
    )
}

export default Banner;