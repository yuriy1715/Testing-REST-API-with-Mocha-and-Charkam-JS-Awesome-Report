module.exports = {
    loginModule: function () {
        const loginModule = require('../utils/loginModule.js');
        const connectionConfig = require('../core/connection.json');
        const chakram = require('chakram');
        before(function (next) {
            this.timeout(connectionConfig.beforeTimeout);
            loginModule.login(connectionConfig, (headersWithcookies) => {
                chakram.setRequestDefaults({
                    headers: headersWithcookies.headers,
                    jar: headersWithcookies.cookies
                });
                next()
            });
        });
    }
};