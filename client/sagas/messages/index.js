/* eslint no-constant-condition: "off" */

import Client from "client"
import { call, fork } from "redux-saga/effects"

import create from "./create"
import find from "./find"
import listener from "./listener"

function* messages() {
  const client = new Client()

  yield call([ client, client.connect ])

  const service = client.service("/api/messages")

  yield fork(listener, service)
  yield fork(find, service)
  yield fork(create, service)
}

export default messages
