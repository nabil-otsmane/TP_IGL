import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { CookiesProvider } from 'react-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

require('react-web-vector-icons/fonts');

ReactDOM.render((
    
    <CookiesProvider>
        <Router>
            <App />
        </Router>
    </CookiesProvider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
