import React from "react"
import PropTypes from "prop-types"

//data
import { allApartments, createApartment, deleteApartment } from '../data/apartments'

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

  getAllApartments = () => {
  getApartments()
    .then(APIapartments => {
      this.setState({
        apartments: APIapartments
      })
    })
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

  handleNewApartment = (newApartmentInfo) => {
  createApartment(newApartmentInfo)
    .then(successApartment => {
        console.log("SUCCESS! New Apartment: ", successApartment);
        const { apartments } = this.state
        apartments.push(successApartment)
        this.setState({ apartments: apartments })
    })
  }

  handleDelete = (id) => {
  deleteApartment(id)
  .then(this.getApartments)
  }

  render () {
    const { apartments } = this.state
    const { current_user } = this.props
    return (
      <React.Fragment>
        <h3>Your Apartment Listings</h3>
        <Apartments 
          apartments={apartments} 
          current_user={current_user} 
          handleNewApartment={this.handleNewApartment}
          handleDelete={this.handleDelete}
          />
      </React.Fragment>
    );
  }
}

export default ApartmentsPage
