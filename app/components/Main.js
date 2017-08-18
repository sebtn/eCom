import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class Main extends Component {
  render() {
    return (
      <h1>This is Main routed using store and provider!</h1>
    )
  }
}

export default connect()(Main)