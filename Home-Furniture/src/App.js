import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Furniture from './components/Furniture';
import Home from './components/Home';
import HomePage from './components/HomePage';
import NotFound from './components/NotFound';


export default ({ history }) => {

    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/furniture" component={Furniture} />
                <Route render={() => <NotFound />} />
            </Switch>

        </Router>
    )

}