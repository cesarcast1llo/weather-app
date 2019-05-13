import React from 'react';

class Form extends React.Component{
  render(){
  return(
    <div className="container title-container">
      <div className="row">
        <div className="col-12 titles">
          <h2>Weather App</h2>
          Please input full country name
          <form onSubmit = {this.props.loadWeather}>
            <input type="text" name="city" placeholder="City.."/>
            <input type="text" name="country" placeholder="Country.."/>
            <button>Get Weather</button>
          </form>
        </div>
      </div>
    </div>
    )
  }
}
export default Form;
