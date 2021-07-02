import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home.js'
import Navbar from './components/Navbar.js'

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route render={() => <h1 className="display-2"> This page does not exist.</h1>} />
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
