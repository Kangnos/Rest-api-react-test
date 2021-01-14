import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import { useEffect } from 'react';

const App = (props) => {

  useEffect(() => {
    const apiCall = async () => {
      let username = "Kangnos"
      const response = await axios.get(`https://api.github.com/users/${username}`)
      console.log(response.data)
      console.log(response.data.followers)
      return response.data
    };
    apiCall();
  },[]);
  return (
    <div className="App">
      {}
    </div>
  );
}

export default App;
