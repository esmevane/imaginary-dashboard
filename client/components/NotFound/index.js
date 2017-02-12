import React, { Component } from "react"
import styles from "./styles.module.css"

export default class NotFound extends Component {

  render() {
    return(
      <div className={ styles.container }>
        <i className="fa fa-times fa-5x"></i>
        <div>Page not found</div>
      </div>
    )
  }

}
