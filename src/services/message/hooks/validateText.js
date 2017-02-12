const errors = require("feathers-errors")

module.exports = () => {
  return hook => {
    if (!hook.data.text) {
      throw new errors.BadRequest("Text can't be blank")
    }
  }
}
