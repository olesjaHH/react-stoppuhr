import React, { Component } from 'react';

class Stoppuhr extends Component {
    state = { 
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
        isOn: false,
        isShown: false
     }
    timer = null

    componentDidUpdate(prevProps, prevState) {
        if (this.state.milliseconds === 100) {
            console.log("matija")
            this.setState({ milliseconds: 0, seconds: this.state.seconds +1 });
        }
        if (this.state.seconds === 60) {
            console.log("matija")
            this.setState({ seconds: 0, minutes: this.state.minutes +1 });
        }
    }

    handleStart = () => {
        this.timer = setInterval(() => this.setState({
            milliseconds: this.state.milliseconds +1,
            isOn: true
        }), 10);
    }
    handleStop = () => {
        clearInterval(this.timer)
        this.setState({ 
            isOn: false});
    }
    handleResume = () => {
        this.handleStart()
    }
    handleReset = () => {
        this.setState({ 
            minutes: 0,
            seconds: 0,
            milliseconds: 0,
            isOn: false
        });
    }

    handleShown = () => {
        this.setState({ isShown: !this.state.isShown });
    }
    render() { 
        return ( 
            <div>
                <span className="field">{this.state.minutes}</span> :
                <span className="field">{this.state.seconds}</span> :
                <span className="field">{this.state.milliseconds}</span> <br />
               
                    <button className={this.state.isShown ? "hide" : "show"} onClick={() => {
                        this.handleStart();
                        this.handleShown();
                    }} >Start</button>
              
                <div className={this.state.isShown ? "show" : "hide"}>
                    <button onClick={this.state.isOn ? this.handleStop : this.handleResume}>{this.state.isOn ? "Stop" : "Resume"}</button>
                    <button onClick={() => {
                        this.handleReset();
                        this.handleShown();
                    }}>Reset</button>
                </div>
            </div>
         );
    }
}
 
export default Stoppuhr;