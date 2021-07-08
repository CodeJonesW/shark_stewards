import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Form from "./pages/Form";
import Welcome from "./pages/Welcome.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import { Flex, View } from "@adobe/react-spectrum";

function App() {
    return (
        <Flex direction="column">
            <Navbar />
            <Router>
                <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route exact path="/sighting" component={Form} />
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
