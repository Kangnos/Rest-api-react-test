import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import React, { Component } from 'react'; 

const api = axios.create({
  baseURL: ''
})

class App extends Component {
  render() {
  return (
      <div className="App">
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
          To get started, edit <code>src/App.js</code>
      </p>
      </div>
  );
  }
}
export default App; //외부에서 import로 불러오기 위해 export
