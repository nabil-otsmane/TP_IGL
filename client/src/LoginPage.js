import React, {Component} from 'react';
import {
  Redirect
} from 'react-router-dom';
import logo from './images/img.png';
import './LoginPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import {Media} from 'react-bootstrap';
import login from './middleware/login';
import checkAuth from './middleware/checkAuth';
import { withCookies } from 'react-cookie';

/**  return all of the login page and works with the login back which verify if the account exits or not */
class LoginPage extends Component{ 


  constructor(props) {
    super(props);

    this.state = {
      errorMsg: "",
      user: "",
      pass: "",
      isLogged: false
    };
  }

  componentDidMount() {
    const { cookies } = this.props;

    checkAuth(cookies.get("jwt_token"))
    .then(isAuth => {
      this.setState({
        isLogged: isAuth
      });
    })
  }

  onSubmit(e){
    e.preventDefault();

    const { cookies } = this.props;

    const {user, pass} = this.state;

    login(user, pass).then(data => {
      if(data.data.type === "error")
      {
        this.setState({
          errorMsg: data.data.msg
        })
      } else if(data.data.type === "info") {
        cookies.set("jwt_token", data.data.cookie)
        this.setState({
          isLogged: true
        })
      } else {
        this.setState({
          errorMsg: "unknown error."
        })
      }
    });

  }

  render(){
    const {isLogged} = this.state;
    return isLogged? (
        <Redirect
            to={{
              pathname: "/",
              state: { from: "/" }
            }}
          />
      ):(
        <div className= "limiter">
          <div className="container-login100">
            <div className="wrap-login100">
              <div>
                <Media>
                  <img src={logo} alt="img"/>
                </Media>
              </div>
              
              <form className="login100-form  validate-form" onSubmit={(e) => this.onSubmit(e)}>
                <span className="login100-form-title">
                  Login
                </span>

                <div className="wrap-input100 validate-input" >                                      
                    <input className="input100" type="text " name="email" placeholder="E-mail" required onChange={(e) => this.setState({user:e.target.value})}
                    pattern="[a-z]{2}_[a-z]+@esi.dz" title="The account should be like : hm_raiah@esi.dz" />
                    <span className="focus-input100"/>
                    <span className="symbol-input100">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                </div>
                <div className="p-t-20"/>
                <div className="wrap-input100 validate-input" >                                          
                    <input className="input100" type="password" name="pass" placeholder="Password" required onChange={(e) => this.setState({pass:e.target.value})}
                    minLength="6" title="The password should contain at least 6 characters"/>
                    <span className="focus-input100"/>
                    <span className="symbol-input100">
                      <FontAwesomeIcon icon={faLock} />
                    </span>
                </div>
             
                <div className="container-login100-form-btn" >                                         
                  <button className="login100-form-btn" variant="outline-secondary" name="Login">Login</button>
                </div>
                  
                <div className="pt-2">
                  <p>{this.state.errorMsg}</p>
                </div>

                <div>
                  <p>{this.state.msg}</p>
                </div>

                <div className="p-t-136" />
              </form>
            </div>
          </div>
        </div>
      )
  }
}

export default withCookies(LoginPage);
