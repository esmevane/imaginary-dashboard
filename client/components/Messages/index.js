import React, { Component } from "react"
import { connect } from "react-redux"
import { createMessage, fetchMessages } from "actions"
import ChatDialog from "components/ChatDialog"

class Messages extends Component {
  componentDidMount() {
    this.props.fetchMessages()
  }

  constructor(props) {
    super(props)

    this.state = { text: "" }
  }

  render() {
    const messages =
      Object
        .values(this.props.messages)
        .filter(message => message.text !== "")

    const handleChange = event =>
      this.setState({ text: String(event.target.value) })

    const handleSubmit = event => {
      event.preventDefault()

      const { text } = this.state

      this.props.createMessage({ text })
      this.setState({ text: "" })
    }

    return(
      <ChatDialog
        messages={ messages }
        onChange={ handleChange }
        onSubmit={ handleSubmit }
        text={ this.state.text }
      />
    )
  }
}

const mapStateToProps = ({ messages }) => ({ messages })
const mapDispatchToProps = { createMessage, fetchMessages }

export default connect(mapStateToProps, mapDispatchToProps)(Messages)
