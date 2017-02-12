import React, { Component } from "react"
import Header from "components/Header"
import Sidebar from "components/Sidebar"
import Home from "components/Home"
import ErrorMessage from "components/ErrorMessage"
import styles from "./styles.module.css"

export default class AppContainer extends Component {
  render() {
    const { header, sidebar, content } = this.props

    return(
      <div className={ styles.container }>
        <header className={ styles.header }>
          { header || <Header /> }
        </header>
        <section className={ styles.content }>
          <aside className={ styles.sidebar }>
            { sidebar || <Sidebar /> }
          </aside>
          <section className={ styles.main }>
            <section className={ styles.notices }>
              <ErrorMessage />
            </section>
            { content || <Home /> }
          </section>
        </section>
      </div>
    )
  }
}