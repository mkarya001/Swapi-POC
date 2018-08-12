import React from 'react';
import {Link} from 'react-router-dom';

const UnAuthScreen = (props) =>   (
        <div className="unauth-section">
            
                <h1>Not Authorized. </h1>
                <p>Sorry, you have no permission to see this page.</p>
                <br />
                <Link to="/login" >Login Again</Link>
            
        </div>
        
    );
 

export default UnAuthScreen;
