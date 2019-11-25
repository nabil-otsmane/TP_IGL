import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faTag, faSortAlphaDownAlt, faBook, faLock, faCalendar, faEnvelopeOpenText, faNewspaper, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { OverlayTrigger, Popover } from 'react-bootstrap';

class Table extends Component { /** The main Page where the admin can see and add Ensgants and Etudiants*/
    render() {

            const columns = [{
                dataField: 'id',
                text: 'Product ID',
                sort: true
            }, {
                dataField: 'name',
                text: 'Product Name'
            }, {
                dataField: 'price',
                text: 'Product Price'
            }];

            const products = [{
                    id: 0,
                    name: "hell",
                    price: "hello2"
                },
                {
                    id: 1,
                    name: "hello",
                    price: "hello2"
                },
                {
                    id: 2,
                    name: "hello",
                    price: "hello2"
                },
                {
                    id: 3,
                    name: "hello",
                    price: "hello2"
                },
                {
                    id: 4,
                    name: "hello",
                    price: "hello2"
                },
                {
                    id: 5,
                    name: "hello",
                    price: "hello2"
                },
                {
                    id: 6,
                    name: "hello",
                    price: "hello2"
                },
                {
                    id: 7,
                    name: "hello",
                    price: "hello2"
                },
                {
                    id: 8,
                    name: "hello",
                    price: "hello2"
                },
                {
                    id: 9,
                    name: "hello",
                    price: "hello2"
                },
                {
                    id: 10,
                    name: "hello",
                    price: "hello2"
                },
                {
                    id: 11,
                    name: "hello",
                    price: "hello2"
                },
                {
                    id: 12,
                    name: "hello",
                    price: "hello2"
                },
                {
                    id: 13,
                    name: "hello",
                    price: "hello2"
                },
                {
                    id: 14,
                    name: "hello",
                    price: "hello2"
                },
                {
                    id: 15,
                    name: "hello",
                    price: "hello2"
                },
                {
                    id: 16,
                    name: "hello",
                    price: "hello2"
                },
                {
                    id: 17,
                    name: "hello",
                    price: "hello2"
                },
                {
                    id: 18,
                    name: "hello",
                    price: "hello2"
                },
                {
                    id: 19,
                    name: "hello",
                    price: "hello2"
                },
                {
                    id: 20,
                    name: "hello",
                    price: "hello2"
                },
                {
                    id: 21,
                    name: "hello",
                    price: "hello2"
                },
                {
                    id: 22,
                    name: "hello",
                    price: "hello2"
                }
            ];

            const defaultSorted = [{
                dataField: 'id',
                order: 'asc',
            }];

            const win = this.props.type;

            const popEnseignant = ( /** This returns a Form to add a new Enseignant */ 
                <Popover id = "popOver" >    
                    <Popover.Title as="h1" >
                        Please Fill this Form 
                    </Popover.Title> 
                    <Popover.Content >
                        <form style = {
                            { margin: "10px" } } >

                            <div className = "wrap-input100 validate-input" >
                                <input className = "input100"
                                    type = "text"
                                    name = "familyNameProf"
                                    placeholder = "Family Name"
                                    minLength = "3"
                                    maxLength = "20"
                                    pattern = "[A-Za-z]{3,20}"
                                    title = "Should contain at least 3 letters "
                                    required />
                                <span className = "focus-input100" />
                                <span className = "symbol-input100" >
                                    <FontAwesomeIcon icon = { faNewspaper }
                                    color = "#1d2a48"
                                    size = "sm" />
                                </span> 
                            </div>

                            <div className = "wrap-input100 validate-input" >
                                <input className = "input100"
                                    type = "text"
                                    name = "firstNameProf"
                                    placeholder = "First Name"
                                    maxLength = "25"
                                    pattern = "[A-Za-z]{1,25}[A-Za-z]{1,25}?"
                                    title = "Accept Only Letters "
                                    required />
                                <span className = "focus-input100" />
                                <span className = "symbol-input100" >
                                    <FontAwesomeIcon icon = { faEnvelopeOpenText }
                                    color = "#1d2a48"
                                    size = "sm" />
                                </span> 
                            </div> 

                            <div className = "wrap-input100 validate-input" >
                                <input className = "input100"
                                    type = "number"
                                    min = "20"
                                    max = "50"
                                    name = "ageProf"
                                    placeholder = "Age"
                                    title = "The age must be between 20 and 50"
                                    required />
                                <span className = "focus-input100" />
                                <span className = "symbol-input100" >
                                    <FontAwesomeIcon icon = { faCalendar }
                                    color = "#1d2a48"
                                    size = "sm" />
                                </span> 
                            </div> 

                            <div className = "wrap-input100 validate-input" >
                                <input className = "input100"
                                    type = "tel"
                                    name = "NSSProf"
                                    placeholder = "Social Security Number"
                                    minLength = "13"
                                    maxLength = "13"
                                    pattern = "[1-9][0-9]{12}"
                                    title = "Your Social Security Number dont start with 0 and must contain 13 Digit"
                                    required />
                                <span className = "focus-input100" />
                                <span className = "symbol-input100" >
                                    <FontAwesomeIcon icon = { faLock }
                                    color = "#1d2a48"
                                    size = "sm" />
                                </span> 
                            </div> 

                            <div className = "wrap-input100 validate-input" >
                                <select className = "input100" >
                                    <option > Algorithmique </option> 
                                    <option > Mathematique </option> 
                                    <option > Autre </option> 
                                </select> 
                                <span className = "focus-input100" />
                                <span className = "symbol-input100" >
                                    <FontAwesomeIcon icon = { faBook }
                                        color = "#1d2a48"
                                        size = "sm" />
                                </span> 
                            </div> 

                            <button className = "login100-form-btn"
                                    onClick = { console.log("Validate") } >
                                Validate 
                            </button>
                        </form> 
                    </Popover.Content> 
                </Popover>);

            const popEtudiant = ( /** This returns a Form to add a new Etudiant */ 
                <Popover id = "popOver" >
                    <Popover.Title as = "h1" >
                        Please Fill this Form 
                    </Popover.Title> 
                    <Popover.Content >
                                <form style = {
                                    { margin: "10px" } } >

                                <div className = "wrap-input100 validate-input" >
                                <input className = "input100"
                                type = "text"
                                name = "familyNameStudent"
                                placeholder = "Family Name"
                                minLength = "3"
                                maxLength = "20"
                                pattern = "[A-Za-z]{3,20}"
                                title = "Should contain at least 3 letters "
                                required />
                                <span className = "focus-input100" />
                                <span className = "symbol-input100" >
                                <FontAwesomeIcon icon = { faNewspaper }
                                color = "#1d2a48"
                                size = "sm" />
                                </span> 
                                </div>

                                <div className = "wrap-input100 validate-input" >
                                <input className = "input100"
                                type = "text"
                                name = "firstNameStudent"
                                placeholder = "First Name"
                                maxLength = "25"
                                pattern = "[A-Za-z]{1,25}[A-Za-z]{1,25}?"
                                title = "Accept Only Letters "
                                required />
                                <span className = "focus-input100" />
                                <span className = "symbol-input100" >
                                <FontAwesomeIcon icon = { faEnvelopeOpenText }
                                color = "#1d2a48"
                                size = "sm" />
                                </span> 
                                </div> 

                                <div className = "wrap-input100 validate-input" >
                                <input className = "input100"
                                type = "date"
                                name = "dateNaissanceStudent"
                                placeholder = "Date de Naissance"
                                required title = "Give us a valid Date of birth" />
                                <span className = "focus-input100" />
                                <span className = "symbol-input100" >
                                <FontAwesomeIcon icon = { faCalendar }
                                color = "#1d2a48"
                                size = "sm" />
                                </span> 
                                </div> 

                                <div className = "wrap-input100 validate-input" >
                                <input className = "input100"
                                type = "text"
                                name = "NiveauStudent"
                                placeholder = "Group"
                                maxLength = "4"
                                pattern = "[1-3]CP?S?\d"
                                title = "Give a valid group. Exemple : 2CP2 / 1CS5 "
                                required />
                                <span className = "focus-input100" />
                                <span className = "symbol-input100" >
                                <FontAwesomeIcon icon = { faAddressBook }
                                color = "#1d2a48"
                                size = "sm" />
                                </span> 
                                </div> 

                                <div className = "wrap-input100 validate-input" >
                                <input className = "input100"
                                type = "tel"
                                name = "matStudent"
                                placeholder = "Matricule"
                                required maxLength = "13"
                                pattern = "[0-9]{13}"
                                title = "Matricule should contain 13 digit and only digits" />
                                <span className = "focus-input100" />
                                <span className = "symbol-input100" >
                                <FontAwesomeIcon icon = { faBook }
                                color = "#1d2a48"
                                size = "sm" />
                                </span> 
                                </div> 

                                <button className = "login100-form-btn"
                                onClick = {
                                    console.log("Validate")
                                } >
                                Validate 
                                </button>

                                </form>
                                </Popover.Content> 
                                </Popover>   );          

            return ( 
                <div className = "mt-4 bg-light w-100" >
                    <div className = "d-flex bg-light"
                        style = {
                            { height: 60 }
                        }>
                        <OverlayTrigger trigger = "click"
                            placement = "right"
                            overlay = {
                                win.toUpperCase().slice(0, win.length - 1) === "ENSEIGNANT" ? popEnseignant : popEtudiant
                            }>
                            <button className = "btn m-3 p-0 pl-2 pr-2 float-left btn-voilet" >
                                <small> ADD { win.toUpperCase().slice(0, win.length - 1) } </small>  
                            </button>  
                        </OverlayTrigger>  
                        <button className = "btn float-left mt-2" >
                            <FontAwesomeIcon icon = { faFilter }
                            color = "#1d2a48"
                            size = "sm" />
                        </button>

                        <button className = "btn float-left mt-2" >
                            <FontAwesomeIcon icon = { faTag }
                            color = "#1d2a48"
                            size = "sm" />
                        </button>

                        <button className = "btn float-right m-2" >
                            <FontAwesomeIcon icon = { faSortAlphaDownAlt }
                            color = "#1d2a48" />
                        </button>  
                    </div>  
                    <div className = "text-left overflow-auto" >
                        <BootstrapTable bootstrap4 keyField = 'id'
                            data = { products }
                            striped hover columns = { columns }
                            defaultSorted = { defaultSorted }
                            bordered = { false }
                            />  
                    </div>  
                </div>
            );
                                }

                            }

                            export default Table;