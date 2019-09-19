import React from "react";

import Errors from "../errors";
import Header from "../header";
import DomainForm from "../DomainForm/DomainForm";

import "./Home.scss";

class Home extends React.Component {
    redirect = (domainName) => {
        let hostname = window.location.hostname;
        window.location.hostname = domainName + "." + hostname;
    };

    render() {
        return (
            <>
                <Errors/>
                <Header/>
                <DomainForm redirect={this.redirect}/>
            </>
        );
    }
}

export default Home;