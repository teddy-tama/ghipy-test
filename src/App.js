import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import IronManGiphy from "./pages/IronManGiphy";
import SearchYourGiphy from "./pages/SearchYourGiphy";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/iron-man-giphy'>
            <IronManGiphy />
          </Route>
          <Route path='/search-your-giphy'>
            <SearchYourGiphy />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
