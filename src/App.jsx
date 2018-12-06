import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import TitleBar from './Components/TitleBar.jsx'
import SideBar from './Components/SideBar.jsx'
import Home from './Components/Home.jsx'
import Gallery from './Components/Gallery.jsx'
import Schedule from './Components/Schedule.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'


class App extends Component {
  render() {
    return (
      <Router>
        <>
          <TitleBar />

          <main>
          <SideBar />
            <div className="content">
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/gallery" component={Gallery}/>
                <Route exact path="/schedule" component={Schedule}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contact" component={Contact}/>
              </Switch>
            </div>
          </main>
        </>
      </Router>
    );
  }
}

export default App;
