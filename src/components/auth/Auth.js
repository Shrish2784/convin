import React from "react";
import "./Auth.scss";
import HttpService from "../../services/HttpService";

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

    render() {
        if (this.state.validDomain === this.domainState.LOADING) {
            return (
                <div>LOADING</div>
            );
        } else if (this.state.validDomain === this.domainState.VALID) {
            return (
                <div>
                    {this.props.domainName}
                </div>
            );
        } else {
            return (
                <div>
                    404
                </div>
            );
        }
    }
}

export default Auth;