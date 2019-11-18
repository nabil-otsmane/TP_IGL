import React, { Component } from 'react';
import Header from './header';
import Table from './table';
import SideBar from './sideBar';
import './index.css';

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            window: "enseignants"
        };

        this.typeChanged = this.typeChanged.bind(this);
    }

    typeChanged(type) {
        this.setState({
            window: type
        });
    }

    render() {

        return (
            <div className="row h-100 m-0">
                <div className="col-auto bg-dark p-0">
                    <SideBar type={this.state.window} onChange={this.typeChanged} />
                </div>
                <div className="col p-4">
                    <Header type={this.state.window} />
                    <Table type={this.state.window} />
                </div>
            </div>
        );
    }
}

export default Main;