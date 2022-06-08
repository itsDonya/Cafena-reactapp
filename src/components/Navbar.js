import React from "react";
import styled from "styled-components";
import TopLinks from "./Header";

const Nav = styled.nav`
    width: 500px;
    position: absolute;
    top: 32px;
    left: 500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    z-index: 20;
    ul {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style: none;
    }
    li a {
        color: white;
        text-decoration: none;
        width: 86px;
        text-align: center;
        padding: 0 4px;
        &:hover {
            color: #d3ad7f;
            border-bottom: 1px solid #d3ad7f;
            padding-bottom: 6px;
            transition: all .3s ease-in-out;
        }
    }
    @media (max-width: 1270px) {
        left:400px
    }
    @media (max-width: 1085px) {
        left:320px
    }
    @media (max-width: 950px) {
        left: 250px
    }
    @media (max-width: 870px) {
        width: 400px;
        left: 250px
    }
    @media (max-width: 768px) {
        width: 44vw;
        height: 100vh;
        position: fixed;
        top: 0;
        right: 0;
        left: auto;
        background-color: #000000;
        padding: 4rem 18px;
        transform: ${(props) => props.open ? "translateX(0)" : "translateX(100%)"};
        ul {
            height: 100%;
            flex-direction: column;
            align-items: start;
            justify-content: flex-start;
            li {
                width: 100%;
                height: 62px;
                border-radius: 6px;
                background-color: black;
                margin: 10px 0;
                padding: 0 8px;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                box-shadow: 0px -2px 4px #aaaaaa30,
                0px 1px 8px #aaaaaa20;
                letter-spacing: 2px;
                &:hover {
                    background-color: #d3ad7f;
                    cursor: pointer;
                }
                &:hover a {
                    color: black;
                }
                a {
                    width: 100%;
                    color: #ccc;
                    text-align: start;
                }
            }
        }
    }
`

const Navbar = ({open}) => {
    return(
        <Nav open={open}>
            <ul>
                <TopLinks href="#" linkName="Home" />            
                <TopLinks href="#about" linkName="About" />            
                <TopLinks href="#menu" linkName="Menu" />            
                <TopLinks href="#products" linkName="Products" />            
                <TopLinks href="#review" linkName="Review" />            
                <TopLinks href="#contact" linkName="Contact" />            
                <TopLinks href="#blogs" linkName="Blogs" />            
            </ul>
        </Nav>
        
    )
}

export default Navbar;