import React, { Component } from "react"
import Header from "components/Header"
import Home from "components/Home"
import ErrorMessage from "components/ErrorMessage"
import styles from "./styles.module.css"

export default class AppContainer extends Component {
  render() {
    const { header, content } = this.props

    return(
      <div className={ styles.container }>
        <header className={ styles.header }>
          { header || <Header /> }
        </header>
        <section className={ styles.content }>
          <section className={ styles.notices }>
            <ErrorMessage />
          </section>
          { content || <Home /> }
        </section>
      </div>
    )
  }
}
