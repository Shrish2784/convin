import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from "../home";
import Auth from "../auth";

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path={'/'} render={props => {
                        const arr = window.location.hostname.split(".");
                        if (arr.length > 1) {
                            let [domainName] = arr;
                            return <Auth {...props} domainName={domainName}/>
                        } else {
                            return <Home {...props}/>;
                        }
                    }}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;