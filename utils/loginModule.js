function login(connectionConfig, callback) {
    const request = require("request");

    function sendRequest(options, callback) {
        request(options, (error, response) => {
            callback(error, response);
        });
    };
    let getCookieByName = (response, name) => {
        let cookies = response.headers["set-cookie"] || [];
        let cookie = cookies
            .map((rawCookie) => {
                let nameAndValueArray = rawCookie.split("=");
                let cookieName = nameAndValueArray[0];
                let cookieValue = nameAndValueArray[1];
                return {
                    name: cookieName,
                    value: cookieValue.split(";")[0]
                };
            })
            .filter((cookie) => {
                return cookie.name === name;
            })[0];
        return cookie && cookie.value;
    };
    let getCookieString = (name, value) => {
        return [name, value].join("=");
    };
    ((callback) => {
        let options = {
            uri: connectionConfig.applicationUrl + connectionConfig.authService,
            method: "POST",
            timeout: 15000,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                UserName: connectionConfig.userName,
                UserPassword: connectionConfig.userPassword,
            })
        };

        sendRequest(options, (error, response) => {
            if (!error) {
                let authCookieValue = getCookieByName(response, "cookie1");
                let csrfCookieValue = getCookieByName(response, "cookie2");
                let loaderCookieValue = getCookieByName(response, "cookie3");
                let userNameCookieValue = getCookieByName(response, "cookie4");

                let headers = {
                    "Content-Type": "application/json",
                    "Accept": "*/*",
                    "BPMCSRF": csrfCookieValue
                };
                const jar = request.jar();
                let loaderCookie = request.cookie(getCookieString("cookie3", loaderCookieValue));
                jar.setCookie(loaderCookie, connectionConfig.applicationUrl);
                let authCookie = request.cookie(getCookieString("cookie1", authCookieValue));
                jar.setCookie(authCookie, connectionConfig.applicationUrl);
                let csrfCookie = request.cookie(getCookieString("cookie2", csrfCookieValue));
                jar.setCookie(csrfCookie, connectionConfig.applicationUrl);
                let userNameCookie = request.cookie(getCookieString("cookie4", userNameCookieValue));
                jar.setCookie(userNameCookie, connectionConfig.applicationUrl);

                callback({headers: headers, cookies: jar});
            }
        });

    })(callback);
}

module.exports = {
    login: login
};