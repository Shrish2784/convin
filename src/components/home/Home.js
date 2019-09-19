import React from "react";

import Header from "../header";
import DomainForm from "../domain_form/DomainForm";

import "./Home.scss";

class Home extends React.Component {
    render() {
        return (
            <>
                <Header/>
                <DomainForm/>
            </>
        );
    }
}

export default Home;