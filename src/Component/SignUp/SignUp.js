import React from "react";
import './../Form/Form.css';

const initialValues = {
        name: "",
        email: "",
        password: "",
        birthDate: "",
        gender: "",
        country: ""
}
class SignUp extends React.Component {
    state = {
        values: initialValues,
        isAgree: false
    }
    handleChange = event => {
        this.setState({
            values : {
                ...this.state.values,
                [event.target.name] : event.target.value
            }
        });
    }
    handleCheckbox = event => {
        this.setState({
            isAgree : event.target.checked
        });
    }
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.values);
        event.target.reset();
        this.setState({
            values: initialValues
        });
    }
    
    render() {
        const { name, email, password, birthDate } = this.state.values;
        return (
            <div className="Container myForm">
                <h2>Registration Form</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Nazmul Hoque"
                        value={name}
                        onChange={this.handleChange}
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="nazmul@gmail.com"
                        value={email}
                        onChange={this.handleChange}
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="********"
                        value={password}
                        onChange={this.handleChange}
                    />

                    <input
                        type="date"
                        name="birthDate"
                        value={birthDate}
                        onChange={this.handleChange}
                    />

                    <select name="country" onChange={this.handleChange}>
                        <option>Select Your</option>
                        <option value="bangladesh">Bangladesh</option>
                        <option value="pakistan">Pakistan</option>
                        <option value="india">India</option>
                        <option value="srilanka">Srilanka</option>
                    </select>

                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        onChange={this.handleChange} 
                    />
                     Male

                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={this.handleChange} 
                        
                    />
                    Female

                    <div style={{ margin: '20px 0px' }}>
                        <label htmlFor="isAgree">Are You Agree?</label>
                        <input
                            type="checkbox"
                            id="isAgree"
                            name="isAgree"
                            checked={this.state.isAgree}
                            onChange={this.handleCheckbox}
                        />
                    </div>

                    <button type="submit" disabled={!this.state.isAgree}>Submit</button>
                </form>
            </div>
        );
    }
}

export default SignUp;