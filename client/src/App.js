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

    checkAuth(cookies.get("jwt_token")).then(data => {
      console.log(data);
      this.setState({
        loggedIn: data.data.isAuth || false,
        loading: false
      })
    });
  }

  render(){
    return (
      <div className ="App" >
        {this.state.loading? 
          <FontAwesomeIcon icon={faSpinner} />:
          this.state.loggedIn?
          <Main />:
          <LoginPage />
        }
      </div>
    );
  }
}

export default withCookies(App);
