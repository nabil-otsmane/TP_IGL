import React, { Component } from 'react';
import Header from './header';
import Table from './table';


class Main extends Component {

    render() {
        return (
            <div className="row h-100 w-100">
                <div className="col-auto bg-dark">

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