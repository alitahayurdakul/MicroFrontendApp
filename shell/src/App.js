import React from 'react';
import {Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import HomeFurnitureApp from './components/HomeFurnitureApp';
import UpHeader from './components/Header/UpHeader';
import NavigateHeader from './components/Header/NavigateHeader';
const history = createBrowserHistory();
export default () => {
    
    return (
        <Router history={history}>
            <div>
                <UpHeader />
                <NavigateHeader />
                <Switch>
                    <Route path="/" component={HomeFurnitureApp} />
                </Switch>
            </div>
        </Router>
    )

}
