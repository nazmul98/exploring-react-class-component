import React from 'react';
import './Timer.css';

class Timer extends React.Component {
    state = {
        count: 0
    }
    increament = () => {
        this.setState({ count: this.state.count + 1 });
    }
    decreament = () => {
        if (this.state.count > 0) {
            this.setState({ count: this.state.count - 1 });
        }
    }
    intervalId = null;
    startTimer = () => {
        if (this.state.count > 0 && !this.intervalId) {
            this.intervalId = setInterval(() => {
                this.setState({ count: this.state.count - 1 }, () => {
                    if (this.state.count === 0) {
                        alert("Timer Finised");
                        clearInterval(this.intervalId);
                        this.intervalId = null;
                    }
                })
            }, 1000)
        }
    }
    stopTimer = () => {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }
    resetTimer = () => {
        this.setState({ count: 0 });
        clearInterval(this.intervalId);
        this.intervalId = null;
    }
    render() {
        return (

            <div className="App-content">
                <div style={{ display: 'flex' }}>
                    <button style={{ marginRight:'10px' }} onClick={() => this.props.add()}>ReduxPlus +</button>
                    <button onClick={() => this.props.sub()}>ReduxMinus -</button>
                </div>
                <h2>State in Class Component</h2>
                <div className="Container">
                    <button onClick={this.decreament} className="Btn">-</button>
                    <span>{this.state.count}</span>
                    <button onClick={this.increament} className="Btn">+</button>
                </div>
                <div className="Container">
                    <button onClick={this.startTimer} className="Btn">Start</button>
                    <button onClick={this.stopTimer} className="Btn">Stop</button>
                    <button onClick={this.resetTimer} className="Btn">Reset</button>
                </div>
            </div>
        );
    }
}


export default Timer;