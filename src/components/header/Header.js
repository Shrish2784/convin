import React from "react";
import "./Header.scss";

class Header extends React.Component {
    render() {
        return (
            <div id="header">
                <div className="row mb-3">
                    <div className="col-6 text-left p-4 pl-5"><span className="h2">Convin</span></div>
                    {this.props.domain != null && (<div className="col-6 text-right p-4 pr-5"><a href="" className="btn btn-danger">Logout</a></div>)}
                </div>
            </div>
        );
    }
}

export default Header;