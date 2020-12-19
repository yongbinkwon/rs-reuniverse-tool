import React from "react";
import Header from './header/header';
import HomePage from "./homePage/homePage";
import NotFoundPage from "./notFoundPage/notFoundPage";
import DamageCalculator from "./damageCalculator/damageCalculator"
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

function RsrsWiki() {
    return(
        <Router>
            <Route component={Header} />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/calc" component={DamageCalculator} />
                <Route component={NotFoundPage} />
            </Switch>
        </Router>
    );
}

export default RsrsWiki;