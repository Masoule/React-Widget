import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {time: new Date()};
    this.intervalID = "";
  }
  render() {
    return (
      <div className="clock">
        <h1>Clock</h1>
        <div className="clock-container">
          <div className="time-container">
            <span className="timeLabel">Time:</span>
            <span className="time">  {this.state.time.toLocaleTimeString('en-US')}</span>
          </div>
          <div className="date-container">
            <span className="dateLaebl">Date:</span>
            <span className="state"> {this.state.time.toDateString()}</span>
          </div>
        </div>
      </div>
  );
  }
  tick() {
    this.setState({time: new Date()});
  }
  componentDidMount() {
    this.intervalID = setInterval(this.tick.bind(this), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
}

export default Clock;
