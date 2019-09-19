import React from "react";
import {Redirect} from "react-router";

import "./SignupForm.scss"
import HttpService from "../../services/HttpService";

class SignupForm extends React.Component {
    createPerson = (e) => {
        e.preventDefault();
        let data = {};
        let elements = e.target.form.elements;
        for (let i = 0;i < elements.length;i++) {
            let item = elements.item(i);
            data[item.name] = item.value;
        }
        HttpService.createPerson(this.props.domain, data)
            .then(res => res.json()).then(json => console.log(json)).catch(err => console.log(err));

    };
    redirectLogin = (e) => {
        e.preventDefault();
        this.props.history.push('/login');
    };

    render() {
        if (localStorage.key('token')) return <Redirect to={'/'}/>;
        return (
            <div className="p-4">
                <form action="">
                    <div className="form-group">
                        <label htmlFor="usernameInput">Username</label>
                        <input type="text" id="usernameInput" name="username" className="form-control"
                               placeholder="Enter Username" required/>
                    </div>
                    <div className="form-row">
                        <div className="col-md-4 col-12">
                            <div className="form-group">
                                <label htmlFor="firstNameInput">First Name</label>
                                <input type="text" id="firstNameInput" name="first_name" className="form-control"
                                       placeholder="Enter First Name" required/>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="form-group">
                                <label htmlFor="middleNameInput">Middle Name</label>
                                <input type="text" id="middleNameInput" name="middle_name" className="form-control"
                                       placeholder="Enter Middle Name"/>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="form-group">
                                <label htmlFor="lastNameInput">Last Name</label>
                                <input type="text" id="lastNameInput" name="last_name" className="form-control"
                                       placeholder="Enter Last Name"/>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="emailInput">Email</label>
                        <input type="email" id="emailInput" name="email" className="form-control"
                               placeholder="Enter Email" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordInput">Password</label>
                        <input type="password" name="password" className="form-control" id="passwordInput" placeholder="Password"
                               required/>
                    </div>
                    <button onClick={this.createPerson} type="submit" className="btn btn-success m-2">Submit</button>
                    <button onClick={this.redirectLogin} type="submit" className="btn btn-primary m-2">Login</button>
                </form>
            </div>
        );
    }
}

export default SignupForm;