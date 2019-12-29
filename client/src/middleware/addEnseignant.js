import { enseignant } from './config';
import axios from 'axios';

export default (token, ens) => {
    return axios({
        method: "POST",
        url: enseignant.url + ":" + enseignant.port + "/api/add",
        data: ens,
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