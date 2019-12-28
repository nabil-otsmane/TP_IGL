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
    });
};