import React, { Component } from 'react';
import Header from './header';
import Table from './table';
import SideBar from './sideBar';
import './index.css';
import getEnseignant from '../middleware/getEnseignant';
import getEtudiant from '../middleware/getEtudiant';
import { Cookies, withCookies } from 'react-cookie';

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            window: "enseignants",
            columns: [],
            users: [],
            dataPresent: false
        };

        this.typeChanged = this.typeChanged.bind(this);
    }

    GetEntriesBDD (s)
    {
        const { cookies } = this.props;

        this.setState({
            dataPresent: false
        });

        if(s === "enseignants")
        {
            getEnseignant(cookies.get('jwt_token'))
            .then(data => {
                this.setState({
                    columns: Object.keys(data.msg[0]).filter(e => e !== "__v" && e !== "_id")
                    .map(e => ({
                        dataField: e,
                        text: e,
                        sort: true
                    })).sort((a, b) => a.text > b.text),
                    users: Object.values(data.msg)
                    .map(e => ({
                        id: e._id,
                        key: e._id,
                        nom: e.nom,
                        nss: e.nss,
                        prenom: e.prenom,
                        email: e.email,
                        password: e.password,
                        specialite: e.specialite,
                    })),
                    dataPresent: true,
                    msg:"",
                    noData: false
                })
            })
            .catch(err => {
                console.log(err);

                this.setState({
                    noData: true,
                    msg: err.msg,
                    dataPresent: false
                });
            })
        } else {
            getEtudiant(cookies.get('jwt_token'))
            .then(data => {
                this.setState({
                    columns: Object.keys(data.msg[0]).filter(e => e !== "__v" && e !== "_id")
                    .map(e => ({
                        dataField: e,
                        text: e,
                        sort: true
                    })).sort((a, b) => a.text > b.text),
                    users: Object.values(data.msg)
                    .map(e => ({
                        id: e._id,
                        key: e._id,
                        nom: e.nom,
                        prenom: e.prenom,
                        email: e.email,
                        password: e.password,
                        groupe: e.groupe,
                        matricule: e.matricule,
                        date_naissance: e.date_naissance
                    })),
                    dataPresent: true,
                    msg:"",
                    noData: false
                })
            })
            .catch(err => {
                console.log(err.message);

                this.setState({
                    noData: true,
                    msg: err.message,
                    
                })
            });
        }
    }

    componentDidMount() {
        this.typeChanged("enseignants");
    }

    typeChanged(type) {
        this.setState({
            window: type
        });

        this.GetEntriesBDD(type);
    }

    render() {

        return (
            <div className="row h-100 m-0">
                <div className="col-auto bg-dark p-0">
                    <SideBar type={this.state.window} onChange={this.typeChanged} />
                </div>
                <div className="col p-4">
                    <Header type={this.state.window} />
                    {this.state.dataPresent && 
                        <Table type={this.state.window} columns={this.state.columns} users={this.state.users} />}
                    {this.state.noData && <Table type={this.state.window} msg={this.state.msg} />}
                </div>
            </div>
        );
    }
}

export default withCookies(Main);