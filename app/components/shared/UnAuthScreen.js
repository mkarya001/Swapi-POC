import React from 'react';
import {Link} from 'react-router-dom';

const UnAuthScreen = (props) =>   (
        <div className="unauth-section">
            
                <h1>You are not Authirised to access this page. </h1>
                <br />
                <Link to="/login" >Login Again</Link>
            
        </div>
        
    );
 

export default UnAuthScreen;