import React, {Component} from 'react';
import {Redirect} from "react-router";

class AuthRoute extends Component {
    render() {
        if (localStorage.key('token')) return <this.props.next {...this.props}/>;
        else return <Redirect to={'/login'}/>;
    }
}

export default AuthRoute;