import axios from 'axios';
import React from 'react';

export default class WeatherAPI extends React.Component{
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
        })
    }

    render(){
        return(
            <React.Fragment>
                <div class="maincontainer">
                    <div class="weather">
                        <div id="City" class="box">Weather in <b>{this.state.cityplacename}</b></div>
                        <div id="Temp" class="box">Current Temperature: {this.state.normal_temp}°C</div>
                        <div id="current_weather" class="box">{this.state.current_weather}</div>
                        <div id="min_max_temperature" class="box">{this.state.mintemperature}°C / {this.state.maxtemperature}°C</div>
                        <div id="humidity" class="box">humidity: {this.state.humidity}%</div>
                        <div id="windspeed" class="box">Wind Speed: {this.state.wind_speed}m/s</div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}