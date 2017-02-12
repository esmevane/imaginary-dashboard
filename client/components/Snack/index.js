import React, { Component } from "react"
import styles from "./styles.module.css"

export default class Snack extends Component {
  constructor(props) {
    super(props)

    this.state = { open: true }
  }

  render() {
    const { children } = this.props
    const { open } = this.state
    const handleToggle = () => this.setState({ open: !open })

    return(
      <div className={ styles.container }>
        <div className={ styles.controls } onClick={ handleToggle }>
          { open ? "Close" : "Open" }
        </div>
        {
          open && (
            <div className={ styles.contents }>
              { children }
            </div>
          )
        }
      </div>
    )
  }
}
