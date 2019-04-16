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
    return (
      <React.Fragment>
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
