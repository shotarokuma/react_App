import React, { Component } from "react";
import { connect } from 'react-redux'
// import { postEvent } from '../actions'
import { Link } from 'react-router-dom'

class EventsNew extends Component {

  render() {
    return (
      <React.Fragment>
        <div><h1>good</h1></div>
      </React.Fragment>
      )
  }
}

// const mapDispatchToProps = ({ postEvent })

export default connect(null ,null)(EventsNew)
