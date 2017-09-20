import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import BaseLayout from './BaseLayout'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BaseLayout>
          {this.props.children}
        </BaseLayout>
      </div>
    );
  }
}

export default App;
