import NavBar from './components/Navbar/NavBar'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {SignIn} from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp'
import store from './store';
import {Provider} from 'react-redux'
import './App.css'


function App() {
  const isAuthenticated=true;
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path='/sign-up' component={SignUp}/>
            <Route exact path='/sign-in' component={SignIn}/>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
