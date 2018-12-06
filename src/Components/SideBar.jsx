import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class SideBar extends Component {
  render() {
    return (
      <>
        <nav className="side">
          <NavLink exact to="/" >home</NavLink>
          <NavLink to="/gallery" >gallery</NavLink>
          <NavLink to="/schedule" >schedule</NavLink>
          <NavLink to="/about" >about us</NavLink>
          <NavLink to="/contact">contact us</NavLink>
        </nav>
      </>
    );
  }
}

export default SideBar;
