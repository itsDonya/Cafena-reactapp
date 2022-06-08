import react from "react";
import React from "react";
import Logo from "../img/logo/logo.png"
import { Cart } from "./Icons";
import { Search } from "./Icons";
import styles from "./Header.module.css";
import styled from "styled-components";
import Hamburger from "./Hamburger";

export default class TopLinks extends react.Component {
    render() {
        return(
            <li><a href={this.props.href}>{this.props.linkName}</a></li>
        )
    }
}

const TheHeader = styled.header`
    width: 100vw;
    height: 10vh;
    background-color: #010103;
    // display: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    border-bottom: 1px solid #373333;
    z-index: 10;
`

const Header = () => {
    return(
        <TheHeader>
            <img className={styles.logo} src={Logo} alt="Cafena Logo"/>

            <Hamburger/>
            
            <div className={styles.top_icons}>
                <Search/>
                <Cart/>
            </div>
        </TheHeader>
    )
}

export {Header};