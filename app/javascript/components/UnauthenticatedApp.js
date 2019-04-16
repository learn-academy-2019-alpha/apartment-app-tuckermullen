import React from "react"
import PropTypes from "prop-types"
class UnauthenticatedApp extends React.Component {
  render () {
    return (
      <React.Fragment>
      	<div>Unauthenticated</div>
      	<div>We got here.</div>
      </React.Fragment>
    );
  }
}

export default UnauthenticatedApp
