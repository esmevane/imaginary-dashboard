import React, { Component } from "react"
import Button from "components/Button"
import Input from "components/Input"
import ChatMessage from "components/ChatMessage"
import styles from "./styles.module.css"

export default class ChatDialog extends Component {
  render() {
    const { messages, onChange, onSubmit, text } = this.props

    return(
      <div className={ styles.container }>
        <div className={ styles.contents }>
          {
            messages.map(message =>
              <ChatMessage key={ message.id } message={ message } />
            )
          }
        </div>
        <form className={ styles.controls } onSubmit={ onSubmit }>
          <Input
            onChange={ onChange }
            placeholder="Send a message"
            type="text"
            value={ text }
          />

          <Button type="submit">
            Send
          </Button>
        </form>
      </div>
    )
  }
}
