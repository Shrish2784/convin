import React from "react";
import {Redirect} from "react-router";

import "./LoginForm.scss"

import Errors from "../errors";
import HttpService from "../../services/HttpService";
import AuthService from "../../services/AuthService";

class LoginForm extends React.Component {
    loginUser = (e) => {
        e.preventDefault();
        let data = {};
        let elements = e.target.form.elements;
        for (let i = 0; i < elements.length; i++) {
            let item = elements.item(i);
            data[item.name] = item.value;
        }
        HttpService.loginUser(this.props.domain, data)
            .then(res => res.json()).then(json => {
                if (json.non_field_errors) {
                    let errors = document.getElementById("errors");
                    errors.style.display = "block";
                    errors.innerText = json.non_field_errors.reduce((res, cur) => {
                        res += cur + '\n';
                        return res;
                    }, '');
                } else {
                    AuthService.loginUser(json.token);
                    this.props.history.push('/');
                }
        }).catch(err => console.log(err));

    };

    redirectSignUp = (e) => {
        e.preventDefault();
        this.props.history.push('/signup');
    };

    render() {
        if (localStorage.key('token')) return <Redirect to={'/'}/>;
        return (
            <div className="p-4">
                <div className="mb-3">
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="usernameInput">Username</label>
                            <input type="text" id="usernameInput" name="username" className="form-control"
                                   placeholder="Enter Username" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="passwordInput">Password</label>
                            <input type="password" name="password" className="form-control" id="passwordInput"
                                   placeholder="Password"
                                   required/>
                        </div>
                        <button onClick={this.loginUser} type="submit" className="btn btn-success m-2">Submit</button>
                        <button onClick={this.redirectSignUp} type="submit" className="btn btn-primary m-2">SignUp</button>

                    </form>
                </div>

                <Errors/>
            </div>
        );
    }
}

export default LoginForm;