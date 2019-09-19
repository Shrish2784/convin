class HttpService {
    static BASE_URL = `https://app.api.convin.ai`;

    static createDomainUtil = (domainName) => {
        return new Promise()
    };

    static createDomain = (domainName) => {
        return new Promise((resolve, reject) => {
            fetch(HttpService.BASE_URL + "/domains/", {
                method: 'POST',
                headers: {
                    "Authorization": "123",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    'name': domainName
                })
            })
                .then(res => resolve(res))
                .catch(err => reject(err));
        });
    };

    static checkDomain = (domainName) => {
        return new Promise((resolve, reject) => {
            fetch(HttpService.BASE_URL + `/domains/availability?name=${domainName}`)
                .then(res => resolve(res))
                .catch(err => reject(err));
        });

    }
}

export default HttpService;