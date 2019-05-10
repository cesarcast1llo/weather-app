import React from 'react';
// import './Form.css';

class Form extends React.Component{
  render(){
  return(
    <div class="col-12 titles">
      <span class="weather_app">Weather App!</span>
      Find the weather for your city
      <form onSubmit = {this.props.loadWeather}>
        <input type="text" name="city" placeholder="City.."/>
        <br/>
        <input type="text" name="country" placeholder="Country.."/>
        <br/>
        <button>Get Weather</button>
      </form>
    </div>
    )
  }
}
export default Form;
