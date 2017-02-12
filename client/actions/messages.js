export const CREATE_MESSAGE = "CREATE_MESSAGE"
export const FETCH_MESSAGES = "FETCH_MESSAGES"
export const MESSAGE_CREATED = "MESSAGE_CREATED"
export const MESSAGE_FAILURE = "MESSAGE_FAILURE"
export const MESSAGE_SUCCESS = "MESSAGE_SUCCESS"

export const createMessage = (payload) => ({ type: CREATE_MESSAGE, payload })
export const fetchMessages = () => ({ type: FETCH_MESSAGES })
export const messageCreated = (payload) => ({ type: MESSAGE_CREATED, payload })
export const messageSuccess = (payload) => ({ type: MESSAGE_SUCCESS, payload })
export const messageFailure = (payload) => ({ type: MESSAGE_FAILURE, payload })
