import React, { Component } from "react"
import { Link } from "react-router"
import styles from "./styles.module.css"

export default class Sidebar extends Component {
  render() {
    return(
      <nav className={ styles.container }>
        <Link className={ styles.link } to="/">
          Home
        </Link>
      </nav>
    )
  }
}
