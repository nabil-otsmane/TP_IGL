import React, { Component } from 'react';
import Header from './header';
import Table from './table';
import SideBar from './sideBar';

class Main extends Component {

    render() {

        return (
            <div className="row h-100 m-0">
                <div className="col-auto bg-dark p-0">
                    <SideBar />
                </div>
                <div className="col p-4">
                    <Header />
                    <Table />
                </div>
            </div>
        );
    }
}

export default Main;