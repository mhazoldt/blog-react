import React, { Component } from 'react';
// import logo from './logo.svg';
import '../styles/App.css';
import { NavLink } from 'react-router-dom'

class BaseLayout extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <div className="container">
            <NavLink className="navbar-brand" to="/">React Blog</NavLink>
            <div>
            <NavLink to="/new">New Post</NavLink>
            </div>
          </div>
        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default BaseLayout;
