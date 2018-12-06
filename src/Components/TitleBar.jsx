import React, { Component } from 'react';
import { NavLink} from 'react-router-dom'
class TitleBar extends Component {
  constructor(props){
    super(props)
  this.state = {
    showMenu: false
  }
}
  _toggleMenu = () => {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu
    }))
  }
  render() {
    return (
      <>
        <header className="top">
          <div className="mobile"/>
          <div className="title">
            <div>florida west coast</div>
            <div>flute choir</div>
          </div>
          <div className="mobile">
            <button  onClick={this._toggleMenu}>
              <i className={this.state.showMenu ? 'up fas fa-chevron-circle-down' : 'down fas fa-chevron-circle-down'}/>           
            </button>
          </div>
        </header>
        <nav className={this.state.showMenu ? 'shown' : 'hidden'}>
          <NavLink exact to="/" onClick={this._toggleMenu}>home</NavLink>
          <NavLink to="/gallery" onClick={this._toggleMenu}>gallery</NavLink>
          <NavLink to="/schedule" onClick={this._toggleMenu}>schedule</NavLink>
          <NavLink to="/about" onClick={this._toggleMenu}>about us</NavLink>
          <NavLink to="/contact" onClick={this._toggleMenu}>contact us</NavLink>
        </nav>
      </>
    );
  }
}

export default TitleBar;
