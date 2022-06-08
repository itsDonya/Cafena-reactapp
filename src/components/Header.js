import react from "react";
import React from "react";
import Logo from "../img/logo/logo.png"
import { Cart } from "./Icons";
import { Search } from "./Icons";
import styles from "./Header.module.css";

class MenuItem extends react.Component {
    render() {
        return(
            <li><a href={this.props.href}>{this.props.linkName}</a></li>
        )
    }
}

const Header = () => {
    return(
        <header>
            <img className={styles.logo} src={Logo} alt="Cafena Logo"/>

            <nav className={styles.top_nav}>
                <ul>
                    <MenuItem href="#" linkName="Home" />            
                    <MenuItem href="#about" linkName="About" />            
                    <MenuItem href="#menu" linkName="Menu" />            
                    <MenuItem href="#products" linkName="Products" />            
                    <MenuItem href="#review" linkName="Review" />            
                    <MenuItem href="#contact" linkName="Contact" />            
                    <MenuItem href="#blogs" linkName="Blogs" />            
                </ul>
            </nav>


            <div className={styles.top_icons}>
                <Search/>
                <Cart/>
            </div>
        </header>
    )
}

export default Header;