const validateText = require("./validateText")
const auth = require("feathers-authentication").hooks

exports.before = {
  all: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated()
  ],
  find: [],
  get: [],
  create: [ validateText() ],
  update: [ validateText() ],
  patch: [ validateText() ],
  remove: []
}

exports.after = {
  all: [],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
}
