import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class Main extends Component {
  render() {
    return (
      <div>
        <h3>Shop smart</h3>
        <b><h5>Start search</h5></b>
        <b><h5>Items on cart in th whole page</h5></b>
        <b><h5>Smart cart</h5></b>
      </div>
    )
  }
}

export default connect()(Main)