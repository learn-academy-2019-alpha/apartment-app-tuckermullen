import React from "react"
import PropTypes from "prop-types"

//data
import { allApartments } from '../data/apartments'

//components
import Apartments from '../Apartments'

class ApartmentsPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
      error: null,
			apartments: []
		}
    this.getApartments()
	}

  getApartments = ()=> {
    allApartments(this.props.all_apartments)
    .then((apartments)=>{
      this.setState({ apartments: apartments })
    })
    .catch((error) => {
      this.setState({
        error
      })
    })
  }

  render () {
    const { apartments } = this.state
    const { current_user } = this.props
    const { user_apartments } = this.props
    return (
      <React.Fragment>
        <h3>Your Apartment Listings</h3>
        <Apartments apartments={apartments} current_user={current_user} user_apartments={user_apartments} />
      </React.Fragment>
    );
  }
}

export default ApartmentsPage
