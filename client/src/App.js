import React ,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './LoginPage';
import Main from './mainPage';
import { instanceOf } from 'prop-types';
import checkAuth from './middleware/checkAuth';
import { Cookies, withCookies } from 'react-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

class App extends Component {

  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      loading: true
    }
  }

  componentDidMount() {

    const { cookies } = this.props;

    checkAuth(cookies.get("jwt_token")).then(isAuth => {
      this.setState({
        loggedIn: isAuth,
        loading: false
      })
    })
    .catch(err => {
      console.log(err.message);
      this.setState({
        loggedIn: false,
        loading: false
      })
    });
  }

  render(){
    
    return (
        <div className ="App" >
        
          <Switch>
          <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/">
              {this.state.loading? <FontAwesomeIcon icon={faSpinner} />: (
                this.state.loggedIn ? (
                  <Main />
                ): ( 
                  <Redirect
                    to={{
                      pathname: "/login",
                      state: { from: "/" }
                    }}
                  />
                ))
              }
            </Route>
          </Switch>
        </div>
    );
  }
}

export default withCookies(App);
