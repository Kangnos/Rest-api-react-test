import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import PersonList from './Components/PersonList';
import WeatherAPI from './Components/WeatherAPI';
import React, { Component } from 'react'; 

class App extends Component {
  render() {
  return (
      <WeatherAPI/>
  );
  }
}
export default App; //외부에서 import로 불러오기 위해 export
