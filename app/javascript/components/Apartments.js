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
                {apartment.street_num}<br/>
                {apartment.street_name}<br/>
                {apartment.city}<br/>
                {apartment.postal_code}<br/>
                {apartment.state}<br/>
                {apartment.country}<br/>
              </li>
            )
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default Apartments
