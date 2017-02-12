/* eslint no-constant-condition: "off" */

import { call, take, put } from "redux-saga/effects"
import messageChannel from "sagas/messages/channel"

function* listener(service) {
  const channel = yield call(messageChannel, service)

  while (true) {
    let action = yield take(channel)

    yield put(action)
  }
}

export default listener
