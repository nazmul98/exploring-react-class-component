import React from 'react';
import './Event.css'

class Event extends React.Component {
    state = {
        name : ""
    }
    handleChange = (event) => {
        this.setState({name: event.target.value});
        console.log(this.state.name);
    }
    handleBlur = () => {
        if (!this.state.name) {
            alert("Please, Input your name");
        }
        console.log("I am Blur Event");
    }
    handleFocus = () => {
        console.log("I'm Focus Event");
    }
    render () {
        return (
            <div className="Container">
                <input 
                type="text" 
                placeholder="Type Your Name"
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                />
                {this.state.name && <h2>Welcome, {this.state.name}</h2>}
            </div>
        );
    }
}

export default Event;