import React from "react";
import { About, Food, Fringe, Home, News, Science, Tech } from "./components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/food">Food</Link>
            </li>
            <li>
              <Link to="/fringe">Fringe</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/science">Science</Link>
            </li>
            <li>
              <Link to="/tech">Tech</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route component={About} path="/about"/>
            
          <Route component={Food} path="/food"/>
           
          <Route component={Fringe} path="/fringe"/>
            <Route component={News} path="/news"/>
           
          <Route component={Science} path="/science"/>
            
          <Route component={Tech} path="/tech" />
           
          <Route component={Home} path="/" />
          
        </Switch>
      </div>
    </Router>
  );
}