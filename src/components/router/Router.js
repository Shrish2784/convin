import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from "../home";
import Auth from "../auth";
import {getSubDomain} from "../../Helpers/Helper";

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path={'/'} render={props => {
                        let domainName = getSubDomain();
                        if (domainName !== '') {
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