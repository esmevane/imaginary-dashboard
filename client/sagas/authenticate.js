import { call, put } from "redux-saga/effects"
import { loginSuccess } from "actions"
import Client from "client"

export default function* () {
  const client = new Client()

  try {
    yield call([ client, client.connect ])

    if (client.loggedIn()) {
      yield put(loginSuccess({ token: client.token() }))
    }
  } catch(error) {
    yield []
  }
}
