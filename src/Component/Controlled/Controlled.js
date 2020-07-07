import React from 'react';
import './../Form/Form.css';

class ControlledForm extends React.Component {
    state = {
        name: "",
        email: "",
        password: ""
    }
    handleChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }
    handleSubmit = event => {
        console.log(this.state);
        event.preventDefault();
        event.target.reset();
        this.setState({
            name:"", email: "", password: ""
        });
    }
    render() {
        const {name, email, password} = this.state;
        return (
            <div className="Container myForm">
                <h2>Controlled Form</h2>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="text" 
                    name="name" 
                    placeholder="Type your name" 
                    value = {name}
                    onChange={this.handleChange}
                    />

                    <input 
                    type="email" 
                    name="email" 
                    placeholder="Type your email" 
                    value={email}
                    onChange={this.handleChange}
                    />

                    <input 
                    type="password" 
                    name="password"
                    placeholder="Type your password" 
                    value={password}
                    onChange={this.handleChange}
                    />

                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default ControlledForm;