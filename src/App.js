import React from "react";
import Weather from "./components/Weather";
import Form from "./components/Form";
// import SWeather from "./components/stateless_weather";
// import SForm from "./components/stateless_form"


const Api_Key = "8d2de98e089f1c28e1a22fc19a24ef04";

class App extends React.Component {

  state = {

    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  //getWeather is a method we'll use to make the api call
  getWeather = async (e) => {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();   
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`);
    const response = await api_call.json();
    console.log(response);
    if(city && country){
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        error: ""
      })
    } else{
      this.setState({
        error: <marquee behavior="slide" scrollamount="40" direction="top">Input an actual city and country! 🙄🙄</marquee>
      })
    }
  }

  render() {

    return (

        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-12 title-container">
                  <Form loadWeather={this.getWeather} />
                </div>
                <div className="col-12 response-container">
                  <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>


    )
  }
}
export default App;
