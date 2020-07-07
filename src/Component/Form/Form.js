import React from 'react';
import './Form.css'

class Form extends React.Component {
    state = {
        name: "",
        country: "",
        bio: "",
        birthdate: "",
        gender: "",
        agree: false,
        skills: []
    }
    handleChange = (event) => {
        this.setState({[event.target.name] : event.target.value})
    }
    handleClick = () => {
        console.log(this.state);
    }
    handleCheckbox = (event) => {
        this.setState({
            agree: event.target.checked
        });
    }
    handleSkills = (event) => {
        if (event.target.checked) {
            this.setState({
                skills: [...this.state.skills, event.target.value]
            });
        } else {
            const skills = this.state.skills.filter(skill => skill !== event.target.value);
            this.setState({skills});
        }
    }
    render () {
        return(
            <div className="Container myForm">
                <h2>Form Elements in React</h2>
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

                <input 
                type="radio" 
                name="gender" 
                value="male" 
                onChange={this.handleChange}/>
                Male
                <input 
                type="radio" 
                name="gender" 
                value="female" 
                onChange={this.handleChange}/>
                Female

                <div style={{ margin: '20px 0px' }}>
                    <label htmlFor="#agree">Skills:- </label>
                    <input 
                    type="checkbox"
                    name="skills" 
                    value="PHP"
                    checked={this.state.skills.includes("PHP")}
                    onChange = {this.handleSkills}
                    />
                    PHP
                    <input 
                    type="checkbox"
                    name="skills" 
                    value="JavaScript"
                    checked={this.state.skills.includes("JavaScript")}
                    onChange = {this.handleSkills}
                    />
                    JavaScript
                    <input 
                    type="checkbox"
                    name="skills" 
                    value="Python"
                    checked={this.state.skills.includes("Python")}
                    onChange = {this.handleSkills}
                    />
                    Python
                </div>
                
                <div style={{ margin: '20px 0px' }}>
                    <label htmlFor="#agree">Are You Agree?</label>
                    <input 
                    type="checkbox"
                    id="agree" 
                    name="agree" 
                    checked={this.state.agree}
                    onChange = {this.handleCheckbox}
                    />
                </div>

                <button onClick={this.handleClick}>Show Data</button>
            </div>
        );
    }
}

export default Form;