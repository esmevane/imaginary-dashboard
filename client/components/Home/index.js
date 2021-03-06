import React, { Component } from "react"
import IfLoggedIn from "components/IfLoggedIn"
import Login from "components/Login"
import Signup from "components/Signup"
import Snack from "components/Snack"
import Messages from "components/Messages"
import styles from "./styles.module.css"

export default class Home extends Component {

  render() {
    return(
      <div className={ styles.container }>
        <Login />
        <Signup />
        <IfLoggedIn>
          <Snack>
            <Messages />
          </Snack>
        </IfLoggedIn>
      </div>
    )
  }

}
