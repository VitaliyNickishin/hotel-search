import React, { Component } from 'react'

export default class SearchHotel extends Component {
//  state = {
//   contacts: []
// }

componentDidMount() {
  this.fetchData();
  
}
fetchData() {
  // this.setState({
  //   contacts: []
  // })
  // fetch(`http://engine.hotellook.com/api/v2/search/start.json?254781&470ac608cd62d7c08dc7daebb4237df7`)
  // fetch('http://engine.hotellook.com/api/v2/lookup.json?query=moscow&lang=ru&lookFor=both&limit=1')
  fetch('http://api.travelpayouts.com/v2/prices/latest?currency=rub&period_type=year&page=1&limit=30&show_to_affiliates=true&sorting=price&token=74fa594050c0bb4bc42a59261df95efc')
  .then(response => response.json())
  .then(parsedJSON => console.log(parsedJSON.results))
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
  .catch(error => console.log('parsing failed', error))
  
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
