import axios from 'axios';
import React from 'react';

export default class PersonList extends React.Component{
    state = {
        persons:[]
    }

    componentDidMount(){
        // http://api.openweathermap.org/data/2.5/weather?q=incheon&appid=cbe7f1eb13ae670e2e99a200f1df5a94
        axios.get(`https://jsonplaceholder.typicode.com/users`).then(res=>{
            this.setState({persons: res.data});
            console.log(res.data)
        })
    }

    render(){
        return(
            <ul>
            {this.state.persons.map(person => <li key={person.id}>{person.name}</li>)}    
            </ul>
        )
    }
}