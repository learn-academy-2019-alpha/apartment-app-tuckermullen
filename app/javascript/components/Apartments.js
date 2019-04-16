import React from "react"
import PropTypes from "prop-types"

class Apartments extends React.Component {
  render () {
    const { apartments, current_user } = this.props
    return (
      <React.Fragment>
        <ul>
          {apartments.map((apartment)=>{
            return(
              <li key={apartment.id}>
                Street Number: {apartment.street_num}<br/>
                Street Name: {apartment.street_name}<br/>
                City: {apartment.city}<br/>
                State: {apartment.state}<br/>
                Postal Code: {apartment.postal_code}<br/>
                Country: {apartment.country}<br/>
              </li>
            )
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default Apartments
