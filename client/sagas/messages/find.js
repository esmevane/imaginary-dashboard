/* eslint no-constant-condition: "off" */

import { call, take, put, fork } from "redux-saga/effects"
import { FETCH_MESSAGES, messageCreated, messageFailure } from "actions"
import clearErrors from "sagas/clearErrors"

function* find(service) {
  while (true) {
    yield take(FETCH_MESSAGES)

    try {
      const options = { query: { $sort: { createdAt: -1 } } }
      const response = yield call([ service, service.find ], options)

      for (let message of response.data) {
        yield put(messageCreated({ message }))
      }
    } catch(error) {
      yield put(messageFailure({ error }))
      yield fork(clearErrors)
    }
  }
}

export default find
