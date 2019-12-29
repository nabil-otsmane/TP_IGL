import { etudiant } from './config';
import axios from 'axios';

export default (token, etud) => {
    console.log(etud);
    return axios({
        method: "POST",
        url: etudiant.url + ":" + etudiant.port + "/api/add",
        data: etud,
        headers: {
            Authorization: "Bearer " + token,
            crossDomaine: true,
        }
    }).then(data => {
        console.log("test");
        if(!("type" in data.data))
            throw new Error("Can't add record.");
        
        if(data.data.type === "error")
            throw new Error(data.data.msg);

        return data.data;
    });
}