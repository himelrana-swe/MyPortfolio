import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/about";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <Link className="navbar-brand" to="/">
                <i className="fa fa-home" />
              </Link>
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#navbar"
              >
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
            </div>
            <div className="navbar-collapse collapse" id="navbar">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a
                    target="_blank" rel="noreferrer"
                    href="https://www.hackerrank.com/himelrana"
                  >
                    Problem Solving
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer" href="https://medium.com/@himelrana">
                    Data Structure
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer" href="https://medium.com/@himelrana">
                    Algorithms
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Swe-HimelRana"
                  >
                    PROJECTS
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.himelrana.com/resume.pdf"
                  >
                    RESUME
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <div>
              <p>Aoubt</p>
            </div>
          </Route>
          <Route path="/users">
            <div>
              <p>Aoubt</p>
            </div>
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
