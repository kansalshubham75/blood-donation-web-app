import {useEffect} from 'react'

import NavBar from './components/Navbar/NavBar'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp'
import Alert from './components/Alert/alert'
import Request from './components/Request/Request'
import {connect} from 'react-redux'
import './App.css'
import setAuthToken from './util/setAuthToken';
import { loadUser } from './actions/user';

const App = (props) => {
  useEffect(() => {
    if(localStorage.token){
      setAuthToken(localStorage.token)
      props.loadUser();
    }
  }, [])
  
  return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Alert/>
          <Switch>
            <Route exact path='/sign-up' component={SignUp}/>
            <Route exact path='/sign-in' component={SignIn}/>
            <Route exact path='/make-a-request' component={Request}/>
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default connect(null,{loadUser})(App);
