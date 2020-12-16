import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import './style.css';

export class Header extends Component {
  render() {
    return (
      <header>
        <h2 className="header-style">PH Chat</h2>
       {/* <Link to="/"><button className="button-style">Logout</button></Link> */}
       <button className="button-style">Logout</button>
      </header>
    )
  }
}

export default Header;
