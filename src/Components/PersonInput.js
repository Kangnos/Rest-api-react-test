import axios from 'axios';
import React from 'react';

export default class PersonInput extends React.Component{
    state = {
        id:0,
    }

    handleChange = event => {
        this.setState({name : event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            name:this.state.name,
        }

        axios
        .delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`, {user})
        .then(res => {
            console.log(res);
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Person ID:
                    <input type="number" name="id" onChange={this.handleChange}></input>
                </label>
                <button type="submit">delete</button>
            </form>
        )
    }
}