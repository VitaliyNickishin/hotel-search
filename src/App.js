import React from 'react';
import Navbar from './components/Navbar/Navbar'
import {Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'
import './App.sass';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/rooms" component={Rooms} /> */}
        {/* <Route exact path="/rooms/:slug" component={SingleRoom} /> */}
        <Route component={Error} />
     </Switch>
    </div>
  );
}

export default App;
