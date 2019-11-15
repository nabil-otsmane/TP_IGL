import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCog, faBell, faSignOutAlt, faSearch } from '@fortawesome/free-solid-svg-icons';


class Header extends Component {
    render() {

        let header = {
            height: 30,
        };

        return (
            <nav className="d-flex justify-content-between align-items-center" style={header}>
                <div>EMPLOYEE MANAGEMENT</div>
                <form className="form-inline w-50">
                    <div className="input-group">
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
                        <FontAwesomeIcon icon={faBell} color="#1d2a48" />
                    </div>
                    <div className="col">
                        <FontAwesomeIcon icon={faUserCog} color="#1d2a48" />
                    </div>
                    <div className="col">
                        <FontAwesomeIcon icon={faSignOutAlt} color="#1d2a48" />
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;