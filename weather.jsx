import React from 'react';

class Weather extends React.Component {

  constructor() {
    super();
    this.state = {};
    this.apiKey = 'bb9d22d57d92c0f0e5e23e615b0a34f7';
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((pos)=> {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
      const reqURL =
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=imperial`;
      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            const res = JSON.parse(xhr.responseText);
            this.setState({temperature: res.main.temp});
            this.setState({city: res.name});

          } else {
            alert ('response Error!');
          }
        }
      };
      xhr.open("GET", reqURL, true);
      xhr.send();
    });
  }

  render() {
    return (
      <div className="weather">
        <h1>Weather</h1>
        <div className="weather-container">
          <p>{this.state.city}</p>

          <p>{this.state.temperature}</p>
        </div>
      </div>
    );
  }


}

export default Weather;
