import React, {Component} from "react";
import {Header} from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Menu from "./components/Menu";
import Products from "./components/Products";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
// import { StyleRoot } from "styled-components";

class App extends Component {
    render() {
        return(
            <>
                {/* <StyleRoot> */}
                    <Header/>
                    <main>
                        <Banner/>
                        <About/>
                        <Menu/>
                        <Products/>
                        <Reviews/>
                        <Contact/>
                        <Blogs/>
                        <Footer/>
                    </main>
                {/* </StyleRoot> */}
            </>
        )
    }
}

export default App;