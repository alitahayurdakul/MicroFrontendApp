import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import HomeFurnitureApp from './components/HomeFurnitureApp';
import UpHeader from './components/Header/UpHeader';

export default () => {
    const history = createBrowserHistory();

    return (
        <Router history={history}>
            <UpHeader/>
            <Switch>
                <Route exact path="/" component={HomeFurnitureApp} />
            </Switch>
        </Router>
    )

}
