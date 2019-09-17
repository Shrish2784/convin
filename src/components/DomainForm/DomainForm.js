import React from "react";

import "./DomainForm.scss";

class DomainForm extends React.Component {
    render() {
        return (
            <div id="domainForm">
                <form>
                    <input placeholder="Name" type="text" autoFocus={true} id="domainName"/>
                    <button className="button successButton" type="submit">Continue</button>
                    <button className="button altButton" type="submit">Create</button>
                </form>
            </div>
        );
    }
}

export default DomainForm;