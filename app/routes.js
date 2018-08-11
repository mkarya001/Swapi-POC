import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Frontview from './containers/Frontview'; 
import Dashboard from './containers/Dashboard'; 

const Routes = () => (
    
    <div>
        <Switch>
            <Route  path="/dashboard" component={Dashboard} />
            <Route  path="/" component={Frontview} />
        </Switch>
    </div>
);

export default Routes; 