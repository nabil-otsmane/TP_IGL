import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faAngleLeft, faBars } from '@fortawesome/free-solid-svg-icons';

import SideButton from './sideButton';

class SideBar extends Component {

    render() {

        var sideBarStyle = {
            width: "185px",
            height: "100%",
            backgroundColor: "#1d2a4f"
        };

        return (
            <div style={sideBarStyle}>
                <div className="d-flex justify-content-between p-3">
                        <FontAwesomeIcon icon={faBars} size="lg" color="#c2c5cd" />
                        <FontAwesomeIcon icon={faPlus} size="lg" color="#c2c5cd" />
                        <FontAwesomeIcon icon={faAngleLeft} size="lg" color="#c2c5cd" />
                </div>

                <SideButton type="enseignant" />
                <SideButton type="etudiant" />
            </div>
        );
    }

}

export default SideBar;