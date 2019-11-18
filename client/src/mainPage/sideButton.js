import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

class SideButton extends Component {

    render() {
        var type = this.props.type;
        var content = type.charAt(0).toUpperCase() + type.slice(1);

        var icon = type.toLowerCase() === "enseignant"? faUser: faUserGraduate;

        var selected = this.props.selected;

        var style = {
            color: "#c2c5cd"
        };

        return (
            <div className="d-flex">
                <button className={"btn w-100 align-items-center p-0 position-relative" + (selected?" btnSelected":"")} 
                style={style} onClick={this.props.onClick}>
                    <div className={"bar" + (selected?"":" d-none")}></div>
                    <div className="d-flex align-items-center">
                        <div className="pl-3 pr-3 pt-2 pb-2">
                            <FontAwesomeIcon icon={icon} />
                        </div>
                        <div className={this.props.collapsed?"d-none": ""}>{content}</div>
                    </div>
                </button>
            </div>
        );
    }

}

export default SideButton;