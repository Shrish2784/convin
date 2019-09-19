import React from "react";
import {Switch, Route} from 'react-router-dom';
import {Redirect} from "react-router";


import Header from "../header";
import SignupForm from "../signup_form";
import LoginForm from "../login_form";
import UserHome from "../user_home";
import HttpService from "../../services/HttpService";
import NotFound from "../not_found";

import "./Auth.scss";
import AuthRoute from "../auth-route";
import AuthService from "../../services/AuthService";

class Auth extends React.Component {
    constructor(props) {
        super(props);

        this.domainState = {
            VALID: 'valid',
            INVALID: 'invalid',
            LOADING: 'loading'
        };
        this.state = {
            validDomain: this.domainState.LOADING
        };

        HttpService.checkDomain(props.domainName)
            .then(res => res.json())
            .then(json => {
                if (json.status === "error") {
                    this.setState({validDomain: this.domainState.VALID});
                } else {
                    this.setState({validDomain: this.domainState.INVALID});
                }
            })
            .catch(err => console.log(err));
    }

    signOut = () => {
        AuthService.signOut();
        this.props.history.push("/")
    };

    render() {
        if (this.state.validDomain === this.domainState.LOADING) return <div>LOADING</div>;
        else if (this.state.validDomain === this.domainState.VALID) {
            let path = this.props.match.path;
            return (
                <div>
                    <Header domain={this.props.domainName} signOut={this.signOut}/>
                    <Switch>
                        <Route
                            exact
                            path={`${path}login/`}
                            render={props => (<LoginForm {...props} domain={this.props.domainName}/>)}
                        />
                        <Route
                            exact
                            path={`${path}signup/`}
                            render={props => (<SignupForm {...props} domain={this.props.domainName}/>)}
                        />
                        <Route exact
                               path={path}
                               render={(props) =>
                                   <AuthRoute {...props} domain={this.props.domainName} next={UserHome}/>
                               }
                        />
                        <Redirect to={"/"}/>
                    </Switch>
                </div>
            );
        } else return <NotFound/>;
    }
}

export default Auth;