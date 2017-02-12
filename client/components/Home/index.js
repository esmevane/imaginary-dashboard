import React, { Component } from "react"
import Login from "components/Login"
import Signup from "components/Signup"
import styles from "./styles.module.css"

export default class NotFound extends Component {

  render() {
    return(
      <div className={ styles.container }>
        <Login />
        <Signup />
      </div>
    )
  }

}
