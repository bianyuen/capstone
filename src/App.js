import './App.css';
import Title from './Title';
import NavBar from './NavBar';
import Home from './Home';
import Nominations from './Nominations';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Title />
      <NavBar/>

      <Router>
      <div>
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>

          <Route path="/Nominations">
            <Nominations />
          </Route>
        </Switch>
      </div>
    </Router>
    
    </div>
  );
}

export default App;
