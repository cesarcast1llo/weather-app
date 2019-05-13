import React from 'react';

const Weather = (props) => {
  return(
    <div className="container">
      <div className="row">
        <div className="col-12 output_weather">
          {props.country && props.city && <p>Location: {props.city}, {props.country}</p>}
          {props.temperature && <p>Temperature: {(props.temperature * 9 / 5 - 459.67).toFixed(1)} F˚</p> }
          {props.humidity && <p>Humidity: {props.humidity}%</p>}
          {props.description && <p>Conditions:  {props.description}</p>}
          {props.error && <p>{props.error}</p>}
        </div>
      </div>
    </div>
  )
}
export default Weather;