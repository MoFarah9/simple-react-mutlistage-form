import React, { Component } from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export class FormPersonalDetails extends Component {
  
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }
  
  render() {
    const { values, handleChange } = this.props
    return (
      <MuiThemeProvider>
        <>
          <TextField 
            placeholder="Enter your Occupation"
            label="Occupation"
            onChange={handleChange('occupation')}
            value={values.occupation}
            style={styles.input}
          />
           <br/>
          <TextField 
            placeholder="Enter your City"
            label="City"
            onChange={handleChange('city')}
            value={values.city}
            style={styles.input}
          />
          <br/>
          <TextField 
            placeholder="Enter your Bio"
            label="Bio"
            onChange={handleChange('bio')}
            value={values.bio}
            style={styles.input}
          />
          <br/>
          <Button variant="contained" style={styles.input} onClick={this.back}>
            Back
          </Button>
          <Button variant="contained" color="primary" style={{...styles.input, ...styles.back}} onClick={this.continue}>
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
  },
  back: {
    marginLeft: 10
  }
}

export default FormPersonalDetails
