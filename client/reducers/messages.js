import { MESSAGE_CREATED, payload } from "actions"

const save = (initialState, action) => {
  const { message } = payload(action)

  return { ...initialState, [ message.id ]: message }
}

export const messages = (initialState = {}, action) => {
  switch (action.type) {
    case MESSAGE_CREATED:
      return save(initialState, action)
    default:
      return initialState
  }
}
