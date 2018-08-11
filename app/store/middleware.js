import {applyMiddleware} from 'redux';

// seting up router middleware
import { routerMiddleware }  from 'react-router-redux'; 

// thunk 
import thunk from 'redux-thunk';

import history from './history';

// applying middleware
const middleware = applyMiddleware(thunk, routerMiddleware(history));

export default middleware;