import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faAngleLeft, faBars, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import SideButton from './sideButton';

class SideBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            collapsed: false
        };
        this.toggleSideBar = this.toggleSideBar.bind(this);
        this.setTypeEnseignants = this.setTypeEnseignants.bind(this);
        this.setTypeEtudiants = this.setTypeEtudiants.bind(this);
    }

    toggleSideBar() {
        this.setState(state => ({
            collapsed: !state.collapsed
        }));
    }

    setTypeEnseignants() {
        this.props.onChange && this.props.onChange("enseignants");
    }

    setTypeEtudiants() {
        this.props.onChange && this.props.onChange("etudiants");
    }

    render() {
        const sideBarWidth = {
            width: this.state.collapsed ? "50px" : "185px",
        }

        const arrow = this.state.collapsed? faAngleRight: faAngleLeft;
        const row = this.state.collapsed? "-column": "";
        const isEnseignant = this.props.type.toLowerCase() === "enseignants";

        return (
            <div style={sideBarWidth} className="sideBarStyle">
                <div className={"d-flex"+ row +" justify-content-between mb-4"}>
                    <button className="btn">
                        <FontAwesomeIcon icon={faBars} size="lg" color="#c2c5cd" />
                    </button>
                    <button className="btn">
                        <FontAwesomeIcon icon={faPlus} size="lg" color="#c2c5cd" />
                    </button>
                    <button className="btn" onClick={this.toggleSideBar}>
                        <FontAwesomeIcon icon={arrow} size="lg" color="#c2c5cd" />
                    </button>
                </div>

                <SideButton type="enseignant" collapsed={this.state.collapsed} selected={isEnseignant} onClick={this.setTypeEnseignants} />
                <SideButton type="etudiant" collapsed={this.state.collapsed} selected={!isEnseignant} onClick={this.setTypeEtudiants} />
            </div>
        );
    }

}

export default SideBar;