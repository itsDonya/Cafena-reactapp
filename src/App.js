import React, {Component} from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Menu from "./components/Menu";
import Products from "./components/Products";
import Reviews from "./components/Reviews";

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
                </main>
            </>
        )
    }
}

export default App;