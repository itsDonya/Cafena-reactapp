import React, { Component } from "react";
import Navbar from "./Navbar";
import styled from "styled-components";

const Burger = styled.div`
    width: 30px;
    height: 30px;
    position: absolute;
    top: 24px;
    right: 14px;
    display: none;
    @media (max-width: 768px) {
        display: block;
        z-index: 25;
        &:hover {
            cursor: pointer;
            div {
                background-color: #d3ad7f;
            }
        }
        div {
            width: 30px;
            height: 4px;
            margin: 4px 0;
            border-radius: 10px;
            background-color: white;
            transition: all .2s ease-in-out;
            transform-origin: 4px;
            &:nth-child(1) {
                transform: ${props => props.open ? "rotate(45deg)" : "rotate(0)"};
            }
            &:nth-child(2) {
                opacity: ${props => props.open ? "0" : "1"};
                transform: ${props => props.open ? "translateX(-100%)" : "translateX(0)"};
            }
            &:nth-child(3) {
                transform: ${props => props.open ? "rotate(-45deg)" : "rotate(0)"};
            }
        }
    }
`

class Hamburger extends Component {
    constructor() {
        super();
        this.state = {
            open: false
        }
    }
    clickHandler = () => {
        this.setState({
            open: !this.state.open
        })
    }
    render() {
        return(
            <>
                <Burger onClick={this.clickHandler} open={this.state.open}>
                    <div></div>
                    <div></div>
                    <div></div>
                </Burger>
                <Navbar open={this.state.open}/>
            </>
        )
    }
}

export default Hamburger;