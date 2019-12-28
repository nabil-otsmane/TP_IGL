
import Axios from 'axios';
import { auth } from './config';


export default (mail, pass) => {
    return Axios({
        method: "POST",
        url: auth.url + ":" + auth.port+"/login",
        data: {
            email: mail,
            password: pass
        },
    })
}