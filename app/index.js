import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router'
 
import history from './store/history'


// import redux store 
import store from './store/';

import Routes from './routes';
import '../scss/main.scss';

//import { createHash } from 'crypto';


ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
           <Routes />
        </Router>
    </Provider>, document.getElementById('app'))
