class HttpService {
    static BASE_URL = `https://app.api.convin.ai`;
    static DomainUrl = `https://${1}.app.api.convin.ai`;

    static getDomainUrl = domainName => `https://${domainName}.api.convin.ai`;

    static createDomain = (domainName) => {
        return new Promise((resolve, reject) => {
            fetch(HttpService.BASE_URL + "/domains/", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    'name': domainName
                })
            }).then(res => resolve(res)).catch(err => reject(err));
        });
    };

    static checkDomain = (domainName) => {
        return new Promise((resolve, reject) => {
            fetch(HttpService.BASE_URL + `/domains/availability?name=${domainName}`)
                .then(res => resolve(res))
                .catch(err => reject(err));
        });
    };

    static createPerson = (domainName, data) => {
        const DomainUrl = HttpService.getDomainUrl(domainName);
        return new Promise((resolve, reject) => {
            fetch(DomainUrl + "/persons/create_admin/", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(res => resolve(res)).catch(err => reject(err));
        });
    };

    static loginUser = (domainName, data) => {
        const DomainUrl = HttpService.getDomainUrl(domainName);
        return new Promise((resolve, reject) => {
            fetch(DomainUrl + "/persons/get_token/", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(res => resolve(res)).catch(err => reject(err));
        });
    }
}

export default HttpService;