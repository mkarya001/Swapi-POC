import React from 'react';

import { Switch, Route, BrowserRouter } from 'react-router-dom';
import FirstScreen from '../components/shared/dashboard/FirstScreen';
import CategoryList from '../components/shared/dashboard/CategoryList';
import SpecificDetails from '../components/shared/dashboard/SpecificDetails';
 
 const Dashboardroutes = (props) => {
  const path = props.match.path; 
  return(
    <Switch>
      
      <Route path={`${path}/:type/:id`} component={SpecificDetails} />
      <Route path={`${path}/:type`} component={CategoryList}/>
      <Route exact path={`${path}`} component={FirstScreen}/>
     </Switch> 
  )
 }

export default Dashboardroutes;