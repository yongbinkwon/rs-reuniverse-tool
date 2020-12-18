import React from "react";
import Header from './header/header';
import HomePage from "./homePage/homePage";
import DamageCalculator from "./damageCalculator/damageCalculator"
import {
    BrowserRouter as Router,
    Route,
    Redirect
} from 'react-router-dom';

function RsrsWiki() {
    return(
        <Router>
            <Route path="/" component={Header} />
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/hei" component={DamageCalculator} />
        </Router>
    );
}

export default RsrsWiki;