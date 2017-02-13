/* eslint no-constant-condition: "off" */

import { fork } from "redux-saga/effects"
import authenticate from "sagas/authenticate"
import login from "sagas/login"
import logout from "sagas/logout"
import messages from "sagas/messages"
import signup from "sagas/signup"

function createSagas() {
  return function* () {
    yield fork(messages)
    yield fork(login)
    yield fork(logout)
    yield fork(signup)
    yield* authenticate()
  }
}

export { createSagas }
