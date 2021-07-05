import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Form";
import Sighting from "./components/Sighting_Form.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import { Flex, View } from "@adobe/react-spectrum";

function App() {
    return (
        <Flex direction="column">
            <Navbar />
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/sighting" component={Sighting} />
                    <Route
                        render={() => (
                            <h1 className="display-2">
                                {" "}
                                This page does not exist.
                            </h1>
                        )}
                    />
                </Switch>
            </Router>
            <Footer />
        </Flex>
    );
}

export default App;
