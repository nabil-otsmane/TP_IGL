import React ,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './LoginPage';
import Main from './mainPage';

class App extends Component {

  loggedIn = false;  // we'll retreive this from the backend

  render(){
    return (
      <div className ="App" >
        {this.loggedIn?
          <Main />:
          <LoginPage />
        }
      </div>
    );
  }
}

export default App;
