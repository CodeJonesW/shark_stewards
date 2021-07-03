import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home.js'
import Sighting from './pages/Sighting.js'
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/sighting" component={Sighting} />
            <Route render={() => <h1 className="display-2"> This page does not exist.</h1>} />
          </Switch>
          <Footer />
        </>
      </Router>
    </div>
  );
}

export default App;
