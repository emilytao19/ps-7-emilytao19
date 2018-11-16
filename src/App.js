import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import {Sites} from "./Sites";
import {Homepage} from "./Homepage";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <React.Fragment>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/sites">Sites</Link>
            <Route path="/about" component={About}/>
            <Route path="/sites" component={Sites}/>
            <Route exact path="/" component={Homepage}/>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

function About() {
  return <div>
    <h1>About Me!</h1>
    <p>My name is Emily Tao. My hobbies include skiing, running, and hanging out with friends.</p>
    <p>My favorite places to ski are Crystal Mountain, Stevens Pass, Sun Peaks, and Whistler.</p>
    <p>This winter, I hope to ski at least twenty days total.</p>
    </div>
}

export default App;
