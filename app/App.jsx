import React, { Component } from 'react';
import Home from './components/home/Home';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      link: '/',
      weatherData: ['Hellow Orld'],
    };
  }

  componentWillMount() {
  }

  componentDidMount() {
    // fetch('http://api.openweathermap.org/data/2.5/forecast?id=5746545&units=imperial&APPID=2e67bf2756763f6ded1d40dfc8a78998')
    //   .then(resp => resp.json())
    //   .then((json) => {
    //     this.setState({ weatherData: json });
    //   })
    //   .catch((err) => {
    //     this.setState({ weatherData: `there was an error: ${err}` });
    //   });
  }

  componentDidUpdate() {
  }

  render() {
    // const { weatherData } = this.state;

    return (
      <Home
        weatherData={this.state.weatherData}
      />
    );
  }
}

export default App;
