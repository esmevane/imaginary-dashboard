import React, { Component } from "react"
import { connect } from "react-redux"

class IfLoggedIn extends Component {
  render() {
    const { children, token } = this.props

    if (token) {
      return React.Children.only(children)
    }

    return(null)
  }
}

const mapStateToProps = ({ token }) => ({ token })

export default connect(mapStateToProps)(IfLoggedIn)
