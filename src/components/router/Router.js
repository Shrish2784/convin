import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from "../home";

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path={'/'} component={Home}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;