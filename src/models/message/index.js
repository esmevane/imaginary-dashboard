// message-model.js - A sequelize model
//
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require("sequelize")

const text    = { type: Sequelize.STRING, allowNull: false }
const options = { freezeTableName: true }

module.exports = function() {
  const app       = this
  const sequelize = app.get("sequelize")
  const Message   = sequelize.define("messages", { text }, options)

  return Message
}
