import { enseignant } from './config';
import axios from 'axios';

export default (token) => {
    return axios({
        method: "POST",
        url: enseignant.url + ":" + enseignant.port + "/api/get",
        headers: {
            Authorization: "Bearer " + token,
            crossDomaine: true,
        }
    })
    .then(data => {
        if(typeof(data.data) === "undefined")
            throw new Error({type: "error", msg: "No data received."});
        
        if(data.data.type !== "info") 
            throw new Error(data.data);

        if(data.data.msg.length === 0)
            throw new Error({type: "error", msg: "No items present."});

        return data.data;
        
    });
}