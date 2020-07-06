import React from 'react';
import './Form.css'

class Form extends React.Component {
    state = {
        name: "",
        country: "",
        bio: "",
        birthdate: ""
    }
    handleChange = (event) => {
        this.setState({[event.target.name] : event.target.value})
    }
    handleClick = () => {
        console.log(this.state);
    }
    render () {
        return(
            <div className="Container myForm">
                <h2>Form Handling in React</h2>
                <input 
                type="text" 
                name="name" 
                placeholder="Type your name"
                onChange={this.handleChange}
                />
                <select name="country" onChange={this.handleChange}>
                    <option>Select Your</option>
                    <option value="bangladesh">Bangladesh</option>
                    <option value="pakistan">Pakistan</option>
                    <option value="india">India</option>
                    <option value="srilanka">Srilanka</option>
                </select>
                <textarea 
                name="bio" 
                placeholder="Type your Bio"
                onChange={this.handleChange}
                ></textarea>
                <input 
                type="date" 
                name="birthdate"
                onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>Show Data</button>
            </div>
        );
    }
}

export default Form;