/* eslint no-constant-condition: "off" */

import { fork } from "redux-saga/effects"
import login from "sagas/login"
import logout from "sagas/logout"
import messages from "sagas/messages"
import signup from "sagas/signup"

function createSagas() {
  return function* () {
    yield fork(login)
    yield fork(logout)
    yield fork(messages)
    yield fork(signup)
  }
}

export { createSagas }
