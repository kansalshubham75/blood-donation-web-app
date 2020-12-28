import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Login from './containers/Login'
import Signup from './containers/Signup';

class App extends Component {
  state={
    isLoggedIn:true
  }
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar isLoggedIn={this.state.isLoggedIn}/>
          <Switch>
            <Route exact path="/"><Landing/></Route>
            <Route exact path="/login"><Login/></Route>
            <Route exact path="/signup"><Signup/></Route>
          </Switch>
          
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
