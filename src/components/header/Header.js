import React from "react";

import "./Header.scss";

import {redirectToDomain} from "../../Helpers/Helper";

class Header extends React.Component {
    redirectToHome = () => {
        redirectToDomain('');
    };

    render() {
        return (
            <div id="header">
                <div className="row mb-3">
                    <div className="col-6 text-left p-4 pl-5"><span className="h2">Convin</span></div>
                    <div className="col-6 text-right p-4 pr-5">
                        {localStorage.key('token') && (
                            <button onClick={this.props.signOut} className="btn btn-danger mx-2">SignOut</button>
                        )}
                        {this.props.domain != null && (
                            <button onClick={this.redirectToHome} className="btn btn-dark mx-2">Home</button>
                        )}
                    </div>

                </div>
            </div>
        );
    }
}

export default Header;