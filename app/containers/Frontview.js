import React, {Component} from 'react';
import {connect} from "react-redux";
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import Header from './Header';


import {fetch} from "../actions"
 
import Frontroutes from '../routes/Frontroutes';

const  Frontview = (props) => {
      return(
         <div>
             <header>
                 <nav>
                     <ul>
                         <li><Link to="/" >Home</Link></li>
                         <li><Link to="/about" >About</Link></li>
                         <li><Link to='/login'>Login</Link></li>
                     </ul>
                 </nav>
             </header>
             <Frontroutes />
         </div>
 );
}



export default connect((dispatch) => {

    return bindActionCreators(
        {
            callfetch : fetch
         }, dispatch
    )
  
})(Frontview);