import React from "react"
import PropTypes from "prop-types"

import CreateApartment from './pages/CreateApartment'

class Apartments extends React.Component {
  render () {
    const { apartments, current_user } = this.props

    return (
      <React.Fragment>
        <ul>
          {apartments.map((apartment)=>{
            return(
              <li key={apartment.id}>
                <a href={"/apartments/" + apartment.id}><strong>{apartment.street_num} {apartment.street_name}</strong></a><br/>
                {apartment.city}, {apartment.state}<br/>
                {apartment.postal_code}<br/>
                {apartment.country}<br/>
              </li>
            )
          })}
        </ul>
        <CreateApartment 
          apartments={apartments} 
          current_user={current_user} 
          handleNewApartment={this.props.handleNewApartment}
          />
      </React.Fragment>
    );
  }
}

export default Apartments
