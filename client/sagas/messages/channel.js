import { eventChannel } from "redux-saga"
import { messageCreated } from "actions"

export default (service) => {
  return eventChannel(publish => {
    service.on("created", message => {
      publish(messageCreated({ message }))
    })

    return () => {}
  })
}
