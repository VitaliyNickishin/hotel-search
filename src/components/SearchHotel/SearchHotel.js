import React, { Component } from 'react'
import {API_URL, API_ID, API_MD5, API_TOKEN} from '../../utils/api'

export default class SearchHotel extends Component {
 state = {
  contacts: []
}

componentDidMount() {
  this.fetchData();
  
}
fetchData() {
  fetch("https://b2b-travel-booking.p.rapidapi.comhttps//www.travelopro.com/b2b-travel-booking.php", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "b2b-travel-booking.p.rapidapi.com",
		"x-rapidapi-key": "e2cc40e7c4mshce05485a848a14ap1c82ddjsn95cd1dbccca5"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});
  // this.setState({
  //   contacts: []
  // })
  // fetch(`${API_URL}/api/v2/search/start.json?${API_ID}&${API_MD5}`)
  // fetch(`${API_URL}/api/v2/prices/nearest-places-matrix`)
  // .then((response) => {
  //   console.log('then');
  //   return response.json()})
  // .then((data)=>{
  //   console.log('data:', data)
  //   this.setState({
  //     contacts: data.results
  //   })
  // })
  // fetch('http://engine.hotellook.com/api/v2/lookup.json?query=moscow&lang=ru&lookFor=both&limit=1')
  // fetch('http://api.travelpayouts.com/v2/prices/latest?currency=rub&period_type=year&page=1&limit=30&show_to_affiliates=true&sorting=price&token=74fa594050c0bb4bc42a59261df95efc')
  // .then(response => response.json())
  // .then(parsedJSON => console.log(parsedJSON.results))
  // .then(parsedJSON => parsedJSON.results.map(data => (
  //   {
  //     fullName: `$(data.hotels.fullName)`,
  //     id: `$(data.hotels.id)`,
  //     location: `$(data.hotels.location)`
  //   }
    
  // )))
  // .then(contacts => this.setState({
  //   contacts
  // }))
  // .catch(error => console.log('parsing failed', error))
  
}

 render() {
  //  const {contacts} = this.state
  return (
   <ul>
    {/* <li>name: {contacts.fullName} </li>
    <li>location: {contacts.location} </li> */}
  </ul>
  )
 }
}
