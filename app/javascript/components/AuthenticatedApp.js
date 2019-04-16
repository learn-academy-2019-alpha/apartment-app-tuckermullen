import React from "react"
import PropTypes from "prop-types"
import {
   BrowserRouter as Router,
   Link,
   Route,
   Switch,
 } from 'react-router-dom'

import ApartmentsPage from './pages/ApartmentsPage'

class AuthenticatedApp extends React.Component {
  render () {
    const { current_user } = this.props
    return (
      <React.Fragment>
        <h2><strong>Welcome {current_user.name}!</strong></h2>
          <div>
            <ul>
              <li>Phone: {current_user.phone}</li>
              <li>Hours: {current_user.hours}</li>
            </ul>
          </div>
      </React.Fragment>
    );
  }
}

export default AuthenticatedApp
