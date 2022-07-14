import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';


export default ({history}) => {
    return(
        <>
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={HomePage}/>
            </Switch>
        </Router>
        </>
    )
}