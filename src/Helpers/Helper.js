export const getSubDomain = () => {
    const arr = window.location.hostname.split(".");
    arr.pop();
    let res = arr.reduce((res, current) => {
        res += current + ".";
        return res;
    }, '');
    return res.slice(0, -1);
};

export const redirectToDomain = (domainName) => {
    const arr = window.location.hostname.split(".");
    let hostName = arr.pop();
    if (domainName === '') {
        window.location.hostname = hostName;
    } else {
        window.location.hostname = domainName + "." + hostName;
    }
};