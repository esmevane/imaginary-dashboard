import buildConnection from "./buildConnection"

export default class Client {
  constructor() {
    this.buildConnection = buildConnection
    this.connection = buildConnection()
  }

  connect() {
    return this
      .connection
      .authenticate()
  }

  disconnect() {
    return this.connection.logout()
  }

  loggedIn() {
    return typeof this.user() !== "undefined"
  }

  login({ email, password }) {
    return this.connection.authenticate({ type: "local", email, password })
  }

  service(key) {
    return this.connection.service(key)
  }

  token() {
    return this.connection.get("token")
  }

  user() {
    return this.connection.get("user")
  }

}
