import React, { Component } from 'react'
import './OpenWheather.sass'

export default class OpenWheather extends Component {
 state = {
  temp: "3",
  pressure: "",
  temp_min: "",
  temp_max: ""
}

componentDidMount() {
  // fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.props.latitude}&lon=${this.props.longitude}&appid=98e5bfeb477c9bec9f5ee8de192eaed8`)
//   fetch(`openweathermap.org/themes/openweathermap/assets/vendor/owm/js/d3.min.js`)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(
//     (result) => {
//       let { temp, pressure, temp_min, temp_max } = result.main
//       this.setState({
//         temp,
//         pressure,
//         temp_min,
//         temp_max
//       });
//     })
//     .catch(function (error) {
//       console.log('Request failed', error)
//     });
}
 render() {
  return (
   // <div className="widget" id="openweathermap-widget-15"></div>
   // <div className="widget"id="openweathermap-widget-19"></div>
   <div className="widget" id="openweathermap-widget-16"></div>


  //  <ul>
  //   <li>temp: {this.state.temp} </li>
  //   <li>pressure: {this.state.pressure} </li>
  //   <li>temp_min: {this.state.temp_min} </li>
  //   <li>temp_max: {this.state.temp_max} </li>
  // </ul>
  )
 }
}
