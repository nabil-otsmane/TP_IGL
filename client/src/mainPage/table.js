import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faTag, faSortAlphaDownAlt,faBook, faLock, faCalendar, faEnvelopeOpenText, faNewspaper, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { OverlayTrigger } from 'react-bootstrap';
import { Popover } from 'react-bootstrap';
import axios from 'axios'

/** The main Page where the admin can see and add Ensgants and Etudiants*/
class Table extends Component {

    constructor(props)
    {
      super(props);
      
      this.ValidateProfClicked = this.ValidateProfClicked.bind(this);
      this.ValidateEtudiantClicked= this.ValidateEtudiantClicked.bind(this);
      this.GetEmailprof = this.GetEmailprof.bind(this);
      this.GetPasswordprof = this.GetPasswordprof.bind(this);
      this.state = {
          dataPresent : false,
          columns : [],
          users :[]
      }
    }
     GetEmailprof ()
    {
        var {FamilyNameProf, FirstNameProf} = this.refs;
        var email = FamilyNameProf.value[0]+"_"+FirstNameProf.value+"@esi.dz";
        return email;
    }

    GetPasswordprof ()
    {
        var {FamilyNameProf, FirstNameProf} = this.refs;
        var password = FamilyNameProf.value[0]+"_"+FirstNameProf.value;
        return password;
    }


    ValidateProfClicked(e)
    {
       // e.preventDefault();
        var {FamilyNameProf, FirstNameProf,AgeProf,NSSProf,specialiteProf} =this.refs;
        if (/[A-Za-z]{3,20}/.test(FamilyNameProf.value)
             &&  /[A-Za-z]{1,25}[A-Za-z]{1,25}?/.test(FirstNameProf.value) 
             &&  /[0-9]{2}/.test(AgeProf.value) && AgeProf.value >=20 && AgeProf.value<=50
             &&  /[1-9][0-9]{12}/.test(NSSProf.value) 
             )  
             {
                 axios.post("http://172.18.0.1:3501/api/enseignant/add",
                 {
                         nom: FamilyNameProf.value,
                         prenom: FirstNameProf.value,
                         email: this.GetEmailprof (),
                         password: this.GetPasswordprof (),
                         specialite: specialiteProf.value,
                         nss: NSSProf.value, 
                 }
                 ).then(data => console.log(data));
             }
        else
        {
            console.log("not Accepted");
        }     
        
    }

    ValidateEtudiantClicked (e)
    {
       // e.preventDefault();
        var {FamilyNameEtudiant,FirstNameEtudiant,DateNaissanceEtudiant,NiveauEtudiant,MatEtudiant}= this.refs;
        if(
            /[A-Za-z]{3,20}/.test(FamilyNameEtudiant.value)
            && /[A-Za-z]{1,25}[A-Za-z]{1,25}?/.test(FirstNameEtudiant.value)
            && //Date de naiussance 
            /[1-3]CP?S?\d/.test(NiveauEtudiant.value) 
            && /[0-9]{13}/.test(MatEtudiant.value)
        )
        {
            axios.post("http://172.18.0.1:3500/api/etudiant/add",
                 {
                         login : "amine@esi.dz" ,
                         nom: FamilyNameEtudiant.value,
                         prenom: FirstNameEtudiant.value,
                         email: this.GetEmailprof (),
                         password: this.GetPasswordprof (),
                         groupe: NiveauEtudiant.value,
                         matricule: MatEtudiant.value, 
                         date_naissance: DateNaissanceEtudiant
                 }
                 ).then(data => console.log(data));
        }
        
        else{
            console.log(DateNaissanceEtudiant.value);
        }

    }

    GetEntriesBDD (s)
    {
        this.setState({
            dataPresent: false
        });
        axios.post("http://172.18.0.1:3501/api/"+s+"/get").then(data => {
		if(data.data === undefined)
		{
			this.setState({
				noData: true
			});
			console.log("no data sent!");
		} else {
			this.setState(
            		{
                		columns: Object.keys(data.data[0])
                		.filter(e => e!=="__v" && e!=="_id")
                		.map(e=>
                    		{  
					return {
                       				dataField : e,
                        			text: e,
                        			sort :true
                    			}
				}), 
                		users : Object.values(data.data).map (e=> {
                    			return {
                        			nss: e.nss,
                        			id: e._id,
                        			nom: e.nom,
                       				login: e.login,
                        			prenom: e.prenom,
                        			email: e.email,
                        			password: e.password,
                        			specialite: e.specialite,
                    			}    
                		}),
                		dataPresent:true

            		})
            		console.log (data.data)
		}
        });
    }

    componentDidMount()
    {
        this.GetEntriesBDD(this.props.type.slice(0,this.props.type.length-1));
    }

    render() {

        const popEnseignant = (
             <Popover id = "popOver" >    
            <Popover.Title as="h1" >
                Please Fill this Form 
            </Popover.Title> 
            <Popover.Content >
                <form style = {
                    { margin: "10px" } } >
                        
                    <div className = "wrap-input100 validate-input" >
                        <input className = "input100"   
                            ref="FamilyNameProf"
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
                            ref="FirstNameProf"
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
                            ref="AgeProf"
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
                            ref="NSSProf"
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
                        <select className = "input100" ref="specialiteProf" name="Module">
                            <option > Algorithmique </option> 
                            <option > Mathematique </option> 
                            <option > IGL </option> 
                            <option > Autre </option> 
                        </select> 
                        <span className = "focus-input100" />
                        <span className = "symbol-input100" >
                            <FontAwesomeIcon icon = { faBook }
                                color = "#1d2a48"
                                size = "sm" />
                        </span> 
                    </div> 
                    <input type="submit" name="Validate" className = "login100-form-btn" onClick={this.ValidateProfClicked}>
                    </input>
                </form> 
            </Popover.Content> 
        </Popover>
            );

            const popEtudiant = (
                <Popover id = "popOver" >
            <Popover.Title as = "h1" >
                Please Fill this Form 
            </Popover.Title> 
            <Popover.Content >
                <form style = {
                        { margin: "10px" } } >
        
                    <div className = "wrap-input100 validate-input" >
                    <input className = "input100"
                    ref="FamilyNameEtudiant"
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
                    ref="FirstNameEtudiant"
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
                    ref="DateNaissanceEtudiant"
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
                    ref="NiveauEtudiant"
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
                    ref="MatEtudiant"
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
        
                    <input type="submit" name="Validate" className = "login100-form-btn" onClick={this.ValidateEtudiantClicked}>
                    </input>
        
                    </form>
                </Popover.Content> 
            </Popover>
            );

            const defaultSorted = [{
                dataField: 'id',
                order: 'asc',
            }];

            const win = this.props.type;

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
                            <button className = "btn m-3 p-0 pl-2 pr-2 float-left btn-voilet" name ="AddButton" >
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
                    {
                        this.state.dataPresent  && (
                            <div className = "text-left overflow-auto" >
                                <BootstrapTable bootstrap4 keyField = 'id'
                                    data = { this.state.users }
                                    striped hover columns = { this.state.columns }
                                    defaultSorted = { defaultSorted }
                                    bordered = { false }
                                    />  
                            </div>
                        )
                    }
                      
                    
                </div>
            );
    }

}

export default Table;
