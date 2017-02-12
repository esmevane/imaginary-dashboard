import { combineReducers } from "redux"

import { errors } from "./errors"
import { token } from "./token"
import { messages } from "./messages"

const createReducers = () => {
  const context = require.context("components", true, /reducers\.(ts|js)/)
  const toReducer = (reducers, key) => (
    {
      ...reducers,
      ...(context(key).default)
    }
  )

  const reducers = context.keys().reduce(toReducer, { errors, messages, token })

  return combineReducers(reducers)
}

export { createReducers }
