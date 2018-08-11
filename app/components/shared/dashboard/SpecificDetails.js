import React from 'react';
import {connect} from "react-redux"; 

import { Link } from 'react-router-dom';
 
import history from '../../../store/history';

class SpecificDetails extends React.Component { 
    
    constructor(props){
        super(props);
        const { loggedUser } = this.props;

        if(!loggedUser || !loggedUser.featureList){
history.push('/dashboard')        }
    }

     
    render() {
    const { match , loggedUser } = this.props;
    const { type, id } = match.params;
    const list = () => {
        
        let correntData = loggedUser[type] && loggedUser[type][id];
      
            if(correntData){
							 return Object.keys(correntData).map((key, value) => 
							  <p key={value}><b>{key}: </b>{correntData[key]}</p>)
            }
        
          
		}
		const correntData = loggedUser[type] && loggedUser[type][id];
    return (
        <div>
            <h1>{type}</h1>
						<h4>{correntData.name}</h4>
            <ul className="category-list">
                <li>{list()}</li>
            </ul>
        </div>
    )
    }
}

export default connect((store) => { 
    return {
        loggedUser : store.loggedUser,
    }
})(SpecificDetails);