import React from 'react';
import './../Form/Form.css';

class UncontrolledForm extends React.Component {
    handleSubmit = event => {
        const data = {};
        data.name = event.target.name.value;
        data.email = event.target.email.value;
        data.password = event.target.password.value;
        console.log(data);
        event.preventDefault();
        event.target.reset();
    }
    render () {
        return(
            <div className="Container myForm">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" placeholder="Type your name"/>
                    <input type="email" name="email" placeholder="Type your email"/>
                    <input type="password" name="password" placeholder="Type your password"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default UncontrolledForm;