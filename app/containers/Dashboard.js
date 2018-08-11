import React, {Component} from 'react';
import {connect} from "react-redux";
import { bindActionCreators } from 'redux' 
import { Link } from 'react-router-dom'
import history from '../store/history';

import { getList, getCategoryData, logOut } from "../actions"
 
import Dashboardroutes from '../routes/Dashboardroutes';
import DashboardNav from '../components/shared/DashboardNav';

class Dashboard extends Component {

    constructor(props){
        super(props);
        this.signOut = this.signOut.bind(this);
        this.props.allSwapi('swapi');
    }
    componentWillMount(){
        const { loggedUser } = this.props; 
        
    }; 

    navigateRoute(type) {
        const { loggedUser , match } = this.props;
        if(!loggedUser || !loggedUser[type]){
            this.props.changeRoute(type);
            history.push(`${match.path}/${type}`);
        } else {
            history.push(`${match.path}/${type}`);   
        }
        
    }
    signOut() {
        this.props.loggingOut();
    }
     
    
    render() {
        const { loggedUser , match } = this.props;
        return(
            <div className="dashboard">
             <DashboardNav {...this.props} signOut={this.signOut}/>
             <div className="dashboard-body">
                
                <div className="dashboard-account"> 
                    <ul>
                        {
                            loggedUser.featureList ? 
                            Object.keys(loggedUser.featureList).map((a,b) =>
                            <li onClick={evt => this.navigateRoute(a)} key={b}>{a}</li>) : ''
                        }
                    </ul>
                </div>
                <div className="right-content">
                <Dashboardroutes 
                {...this.props}
                />
                </div>
             </div>

         </div>
        )
    }
}



export default connect((store) => { 
    return {
        loggedUser : store.loggedUser,
    }
}, (dispatch) => {

    return bindActionCreators(
        {
            allSwapi : getList,
            changeRoute: getCategoryData,
            loggingOut : logOut
         }, dispatch
    )
  
})(Dashboard);