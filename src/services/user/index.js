const service = require("feathers-sequelize")
const hooks = require("./hooks")

module.exports = function() {
  const app = this

  const options = {
    Model: app.get("models").users,
    paginate: {
      default: 5,
      max: 25
    }
  }

  app.use("/users", service(options))

  const users = app.service("/users")

  users.before(hooks.before)
  users.after(hooks.after)
}
