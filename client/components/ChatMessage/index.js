import React, { Component } from "react"
import moment from "moment"
import styles from "./styles.module.css"

export default class ChatMessage extends Component {
  render() {
    const { message } = this.props
    return(
      <div className={ styles.container }>
        <div className={ styles.timestamp }>
          { moment(message.createdAt).fromNow() }
        </div>
        <div className={ styles.body }>
          { message.text }
        </div>
      </div>
    )
  }
}
