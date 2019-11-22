import React, {Component} from 'react';
import logo from './images/img.png';
import './LoginPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import {Media} from 'react-bootstrap';

class LoginPage extends Component{ /** @constructor  return all of the login page and works with the login back which verify if the account exits or not */
  render(){
    return(
        <div className= "limiter">
          <div className="container-login100">
            <div className="wrap-login100">
              <div >
                <Media>
                  <img src={logo} alt="img"/>
                </Media>
              </div>
              
              <form className="login100-form  validate-form">
                <span className="login100-form-title">
                  Login
                </span>

                <div className="wrap-input100 validate-input" >                                      
                    <input className="input100" type="text " name="email" placeholder="E-mail" required
                    pattern="[a-z]{2}_[a-z]+@esi.dz" title="The account should be like : hm_raiah@esi.dz" />
                    <span className="focus-input100"/>
                    <span className="symbol-input100">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                </div>
                <div className="p-t-20"/>
                <div className="wrap-input100 validate-input" >                                          
                    <input className="input100" type="password" name="pass" placeholder="Password" required
                    minLength="6" title="The password should contain at least 6 characters"/>
                    <span className="focus-input100"/>
                    <span className="symbol-input100">
                      <FontAwesomeIcon icon={faLock} />
                    </span>
                </div>
             
                <div className="container-login100-form-btn" >                                         
                <button className="login100-form-btn" variant="outline-secondary">Login</button>
                </div>

                <div className="p-t-136"/>
              </form>
            </div>
          </div>
        </div>
    );
  }
}

export default LoginPage;
