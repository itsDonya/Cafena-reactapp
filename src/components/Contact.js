import styles from "./Contact.module.css";
import Button from "./Button";
import { User } from "./Icons";
import { Email } from "./Icons";
import { Phone } from "./Icons";

const Contact = () => {
    return(
        <article id="contact">
            <h1 className="title"><span className="orange">contact</span> us</h1>
            <form>
                    <h4 className={styles.formTitle}>get in touch</h4>
                    <div className={styles.name}>
                        <User/>
                        <input spellCheck="false" type="text" placeholder="Name"/>
                    </div>
                    <div className={styles.email}>
                        <Email/>
                        <input spellCheck="false" type="email" placeholder="Email"/>
                    </div>
                    <div className={styles.number}>
                        <Phone/>
                        <input spellCheck="false" type="number" placeholder="Number"/>
                    </div>
                    <Button text="contact now"/>
            </form>
        </article>
    )
}

export default Contact;