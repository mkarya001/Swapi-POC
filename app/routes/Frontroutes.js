import React from 'react';

import { Switch, Route } from 'react-router-dom';

import HomeScreen from '../components/shared/HomeScreen';
import AboutScreen from '../components/shared/AboutScreen';
import Loginscreen from '../components/shared/Loginscreen';
import UnAuthScreen from '../components/shared/UnAuthScreen';

const Frontroutes = () => (
    <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route  path="/about" component={AboutScreen} />
        <Route  path="/unauth" component={UnAuthScreen} />
        <Route  path="/login" component={Loginscreen} />
    </Switch>
)

export default Frontroutes;