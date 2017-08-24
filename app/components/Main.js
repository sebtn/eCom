import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class Main extends Component {
  render() {
    return (
      <div>
        <h3>This is Main routed using store and provider!</h3>
      </div>
    )
  }
}

export default connect()(Main)