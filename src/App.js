import React, {Component} from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";

class App extends Component {
    render() {
        return(
            <>
                <Header/>
                <main>
                    <Banner/>
                </main>
            </>
        )
    }
}

export default App;