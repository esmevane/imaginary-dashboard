/* eslint no-constant-condition: "off" */

import { call, fork, put, take } from "redux-saga/effects"
import { CREATE_MESSAGE, payload, messageFailure } from "actions"
import clearErrors from "sagas/clearErrors"

function* create(service) {
  while (true) {
    const action = yield take(CREATE_MESSAGE)
    const { text } = payload(action)

    try {
      yield call([ service, service.create ], { text })
    } catch(error) {
      yield put(messageFailure({ error }))
      yield fork(clearErrors)
    }
  }
}

export default create
