import {createStore} from 'redux';
import { routerMiddleware , routerReducer }  from 'react-router-redux'; 

import middleware from './middleware';
 
import reducer from '../reducer';
// export store
export default createStore(reducer, middleware);