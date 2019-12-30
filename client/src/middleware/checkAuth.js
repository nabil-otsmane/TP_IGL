import axios from 'axios';
import { auth } from './config';

export default (token) => {
    return axios({
        method: "POST",
        url: auth.url+":"+auth.port+"/isAuth",
        headers: {
            Authorization: "Bearer " + token,
            crossDomaine: true
        },
    }).then((data) => {
        if(!("isAuth" in data.data))
            throw new Error("Internal Error.");

        return data.data.isAuth;
    });
};