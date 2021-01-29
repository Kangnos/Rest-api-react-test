import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import React, { Component, createElement } from 'react'; 

class App extends Component {
  state = {
    weather:[],
    main:[],
    feelingtemperature:[],
    cityplacename:[],
    mintemperature:[],
    maxtemperature:[],
    normal_temp:[],
    humidity:[],
    wind_speed:[],
    current_weather:[]
  }

  componentDidMount(){
      // http://api.openweathermap.org/data/2.5/weather?q=incheon&appid=cbe7f1eb13ae670e2e99a200f1df5a94&units=metric&lang=kr
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=incheon&appid=cbe7f1eb13ae670e2e99a200f1df5a94&units=metric&lang=kr`).then(res=>{
          this.setState({weather: res.data, main: res.data.main, feelingtemperature: res.data.main.feels_like, cityplacename: res.data.name, normal_temp:res.data.main.temp, mintemperature: res.data.main.temp_min, 
          maxtemperature: res.data.main.temp_max, humidity: res.data.main.humidity, wind_speed: res.data.wind.speed, current_weather: res.data.weather[0].description});
          console.log(this.state)
          console.log(res.data)
          if (this.state.current_weather.match('맑음')) {
            React.createElement("img", { src: "public\Brand-New weather icons\broken clouds.png", className: "weather_icon", alt: "weather_icon" })
          }
          if (this.state.current_weather.match('온흐림')) {
            React.this.setState({current_weather: "흐림"})
            createElement("img", { src: "public\Brand-New weather icons\clear sky.png", className: "weather_icon", alt: "weather_icon" })
          }
          
          if (this.state.current_weather.match('실')) {
            this.setState({current_weather: "이슬 비"})
          }
          
          if (this.state.current_weather.match('튼구름')) {
            this.setState({current_weather: "대체로 흐림"})
          }

          if(res.data.weather[0].description.match("Mist") || res.data.weather[0].description.match("Haze") || res.data.weather[0].description.match("Fog"))
          {
            this.setState({current_weather: "안개"})
          }
          if (this.state.current_weather.match("구름") || this.state.current_weather.match("약간")) {
            createElement("img", { src: "public\Brand-New weather icons\few clouds.png", className: "weather_icon", alt: "weather_icon" })
          }
      })
  }

  render() {
    return (
      <div class="maincontainer">
        <div class="weather">
            <div id="City" class="box">Weather in <b>{this.state.cityplacename}</b></div>
            <div id="Temp" class="box">Current Temperature: {this.state.normal_temp}°C</div>
            <div id="current_weather" class="box">
              {this.state.current_weather}
              <img src={require('')}></img>
            </div>
            <div id="min_max_temperature" class="box">{this.state.mintemperature}°C / {this.state.maxtemperature}°C</div>
            <div id="humidity" class="box">humidity: {this.state.humidity}%</div>
            <div id="windspeed" class="box">Wind Speed: {this.state.wind_speed}m/s</div>
        </div>
      </div>
    );
  }
}
export default App; //외부에서 import로 불러오기 위해 export
