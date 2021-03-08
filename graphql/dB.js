const { ApolloError } = require("apollo-server")

class SessionAPI {
    constructor() {
        this.sessionData = {}
    }
}

class TariffAPI {
    constructor() {
        this.tariffData = {}
    }
}
module.exports = {
    SessionAPI,
    TariffAPI
}
