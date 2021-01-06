import NavBar from './components/Navbar/NavBar'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {SignIn} from './components/SignIn/SignIn';
import {SignUp} from './components/SignUp/SignUp'
import {useState} from 'react';
import './App.css'


function App() {
  const isAuthenticated=true;
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar isLoggedIn={isAuthenticated}></NavBar>
        <Switch>
          <Route exact path='/sign-up' component={SignUp}/>
          <Route exact path='/sign-in' component={SignIn}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
