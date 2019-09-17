import React from "react";

import Errors from "../errors";
import Header from "../header";
import DomainForm from "../DomainForm/DomainForm";

import "./Home.scss";

class Home extends React.Component {
    constructor(props) {
        super(props);
        console.log(window.location);
    }
    render() {
        return (
            <>
                <Errors/>
                <Header/>
                <DomainForm/>
            </>
        );
    }
}

export default Home;