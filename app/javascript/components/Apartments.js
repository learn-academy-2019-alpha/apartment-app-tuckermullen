import React from "react"
import PropTypes from "prop-types"
import { Button } from 'react-bootstrap';

import CreateApartment from './pages/CreateApartment'

let styles = {
  maxWidth: '300px',
  margin: '20px'
}

class Apartments extends React.Component {
  render () {
    const { apartments, current_user } = this.props

    let styles = {
      listStyleType: 'none'
    }

    return (
      <React.Fragment>
        <ul>
          {apartments.map((apartment)=>{
            return(
              <div key={apartment.id}>
              <li style={styles}>
                <a href={"/apartments/" + apartment.id}><strong>{apartment.street_num} {apartment.street_name}</strong></a><br/>
                {apartment.city}, {apartment.state}<br/>
                {apartment.postal_code}<br/>
                {apartment.country}<br/>
              </li>
              {current_user &&
                <Button className="button" variant="danger" onClick={() => this.props.handleDelete(apartment.id)}>Delete {apartment.street_num} {apartment.street_name}</Button>
              }
              </div>
            )
          })}
        </ul>
        <div style={styles}>
        {current_user &&
          <CreateApartment 
            apartments={apartments} 
            current_user={current_user} 
            handleNewApartment={this.props.handleNewApartment}
            />
        }
        </div>
      </React.Fragment>
    );
  }
}

export default Apartments
