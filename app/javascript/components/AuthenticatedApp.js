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
    const { current_user, apartments } = this.props
    return (
      <React.Fragment>
        <h2><strong>Welcome {current_user.name}!</strong></h2>
        <a href="/">Home</a> | <a rel="nofollow" data-method="delete" href="/users/sign_out">Log Out</a>
        <Router>
          <Switch>
            <Route to="/apartments" render={() => (
              <ApartmentsPage {...this.props} />
            )} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default AuthenticatedApp
