import React from "react"
import PropTypes from "prop-types"
import { Form, Button } from 'react-bootstrap';

class CreateApartment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        street_num: '',
        street_name: '',
        city: '',
        state: '',
        postal_code: '',
        country: ''
      }
    }
  }

  handleChange = (event) => {
    let { form } = this.state
    form[event.target.name] = event.target.value
    this.setState({form: form})
  }

  submitForm = (event) => {
    event.preventDefault()
    this.props.handleNewApartment(this.state.form)
  }

  render () {
    const { apartments, current_user } = this.props

    return (
      <React.Fragment>
        <Form>
          <Form.Group controlId="street_num">
            <Form.Label>Street Number: </Form.Label><br/>
            <Form.Control type="text" name="street_num" onChange={this.handleChange} />
          </Form.Group>

          <Form.Group controlId="street_name">
            <Form.Label>Street Name: </Form.Label><br/>
            <Form.Control type="text" name="street_name" onChange={this.handleChange} />
          </Form.Group>

          <Form.Group controlId="city">
            <Form.Label>City: </Form.Label><br/>
            <Form.Control type="text" name="city" onChange={this.handleChange} />
          </Form.Group>

          <Form.Group controlId="state">
            <Form.Label>State: </Form.Label><br/>
            <Form.Control type="text" name="state" onChange={this.handleChange} />
          </Form.Group>

          <Form.Group controlId="postal_code">
            <Form.Label>Postal Code: </Form.Label><br/>
            <Form.Control type="text" name="postal_code" onChange={this.handleChange} />
          </Form.Group>

          <Form.Group controlId="country">
            <Form.Label>Country: </Form.Label><br/>
            <Form.Control type="text" name="country" onChange={this.handleChange} />
          </Form.Group>
        </Form>

        <Button id='submit' variant='success' onClick={this.submitForm}>Create Apartment</Button>
      </React.Fragment>
    );
  }
}

export default CreateApartment
