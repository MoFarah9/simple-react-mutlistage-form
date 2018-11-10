import React, { Component } from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }
  render() {
    const { values, handleChange } = this.props
    return (
      <MuiThemeProvider>
        <>
          <TextField 
            placeholder="Enter your fist name"
            label="First Name"
            onChange={handleChange('firstName')}
            value={values.firstName}
            style={styles.input}
          />
           <br/>
          <TextField 
            placeholder="Enter your last name"
            label="Last Name"
            onChange={handleChange('lastName')}
            value={values.lastName}
            style={styles.input}
          />
          <br/>
          <TextField 
            placeholder="Enter your email"
            label="Email"
            type="email"
            onChange={handleChange('email')}
            value={values.email}
            style={styles.input}
          />
          <br/>
          <Button variant="contained" color="primary" style={styles.input} onClick={this.continue}>
            Continue
          </Button>
        </>
      </MuiThemeProvider>
    )
  }
}

const styles = {
  input: {
    marginTop: 15
  }
}

export default FormUserDetails
