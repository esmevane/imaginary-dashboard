const service = require("feathers-sequelize")
const hooks = require("./hooks")

module.exports = function(){
  const app = this

  const options = {
    Model: app.get("models").messages,
    paginate: {
      default: 5,
      max: 25
    }
  }

  app.use("/messages", service(options))

  const messageService = app.service("/messages")

  messageService.before(hooks.before)
  messageService.after(hooks.after)
}
