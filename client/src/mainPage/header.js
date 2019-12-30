import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCog, faBell, faSignOutAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import { withCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';

function Header (props) {

    let history = useHistory();

    function logout() {
        const {cookies} = props;
        cookies.remove("jwt_token");
        history.replace("/login"); 
    }

    return (
        <nav className="d-flex justify-content-between align-items-center header">
        <div>GESTION DES {props.type.toUpperCase()}</div>
            <form className="form-inline w-50 justify-content-center">
                <div className="input-group w-50">
                    <input type="search" className="form-control p-1 h-25 text-center" placeholder="Rechercher compte" />
                    <div className="input-group-append">
                        <button className="input-group-text btn p-1" type="submit">
                            <FontAwesomeIcon icon={faSearch} color="#1d2a48" />
                        </button>
                    </div>
                </div>
                
            </form>
            <div className="row">
                <div className="col">
                    <button className="btn">
                        <FontAwesomeIcon icon={faBell} color="#1d2a48" />
                    </button>
                </div>
                <div className="col">
                    <button className="btn">
                        <FontAwesomeIcon icon={faUserCog} color="#1d2a48" />
                    </button>
                </div>
                <div className="col">
                    <button className="btn" onClick={logout}>
                        <FontAwesomeIcon icon={faSignOutAlt} color="#1d2a48" />
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default withCookies(Header);