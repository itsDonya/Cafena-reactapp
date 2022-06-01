import React, {Component} from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";

class App extends Component {
    render() {
        return(
            <>
                <Header/>
                <main>
                    <Banner/>
                    <About/>
                </main>
            </>
        )
    }
}

export default App;