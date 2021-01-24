import axios from 'axios';
import React from 'react';

export default class PersonList extends React.Component{
    state = {
        weather:[],
        main:[],
        feelingtemperature:[],
        cityplacename:[],
        min_temperature:[],
        max_temperature:[]
    }

    componentDidMount(){
        // http://api.openweathermap.org/data/2.5/weather?q=incheon&appid=cbe7f1eb13ae670e2e99a200f1df5a94&units=metric&lang=kr
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=incheon&appid=cbe7f1eb13ae670e2e99a200f1df5a94&units=metric&lang=kr`).then(res=>{
            this.setState({weather: res.data, main: res.data.main, feelingtemperature: res.data.main.feels_like, cityplacename: res.data.name, min_temperature: res.main.temp_min, max_temperature: res.main.temp_max});
            console.log(this.state)
            console.log(res.data)
        })
    }

    render(){
        return(
            <React.Fragment>
                <div>{this.state.min_temperature}°C / {this.state.max_temperature}°C</div>
                <div>체감온도: {this.state.feelingtemperature}도</div>
            </React.Fragment>
        )
    }
}