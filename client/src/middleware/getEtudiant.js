import axios from 'axios';
import { etudiant } from './config';

export default (token) => {
    return axios({
        method: "POST",
        url: etudiant.url + ":" + etudiant.port + "/api/get",
        headers: {
            Authorization: "Bearer " + token,
            crossDomaine: true,
        }
    })
    .then(data => {
        if(!("type" in data.data)) 
            throw new Error("No items present.");

        if(data.data.type !== "info") 
            throw new Error(data.data.msg);

        if(data.data.msg.length === 0)
            throw new Error("No items present.");

        return data.data;
        
    });
};