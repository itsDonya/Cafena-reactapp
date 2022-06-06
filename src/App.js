import React, {Component} from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Menu from "./components/Menu";
import Products from "./components/Products";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";

class App extends Component {
    render() {
        return(
            <>
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
            </>
        )
    }
}

export default App;