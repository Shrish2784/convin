import React from "react";

import "./DomainForm.scss";
import HttpService from "../../services/HttpService";

class DomainForm extends React.Component {

    continueDomain = (e) => {
        e.preventDefault();
        let domainName = e.target.form.domainName.value;
        this.props.redirect(domainName);
    };

    createDomain = (e) => {
        e.preventDefault();
        let domainName = e.target.form.domainName.value;
        //TODO: validateDomainName(domainName);
        HttpService.createDomain(domainName)
            .then(res => res.json())
            .then(json => {
                if(json.status === "success") {
                    this.props.redirect(domainName);
                }
            })
            .catch(err => console.log(err));

    };

    render() {
        return (
            <div id="domainForm">
                <form>
                    <input placeholder="Name" name="domainName" type="text" autoFocus={true} id="domainName"/>
                    <button onClick={this.continueDomain} className="button successButton" type="submit">Continue
                    </button>
                    <button onClick={this.createDomain} className="button altButton" type="submit">Create</button>
                </form>
            </div>
        );
    }
}

export default DomainForm;