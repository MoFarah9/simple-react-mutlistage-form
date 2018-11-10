import React, { Component } from "react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";

export class FormConfirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCCESS FORM HERE
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio }
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <List style={styles.list}>
            <ListItem>
              <ListItemText primary="First Name" secondary={ firstName } />
            </ListItem>
            <ListItem>
              <ListItemText primary="Last Name" secondary={ lastName } />
            </ListItem>
            <ListItem>
              <ListItemText primary="Email" secondary={ email } />
            </ListItem>
            <ListItem>
              <ListItemText primary="Occupation" secondary={ occupation } />
            </ListItem>
            <ListItem>
              <ListItemText primary="City" secondary={ city } />
            </ListItem>
            <ListItem>
              <ListItemText primary="Bio" secondary={ bio } />
            </ListItem>
          </List>
          <Button variant="contained" style={styles.input} onClick={this.back}>
            Confirm and Continue
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={{ ...styles.input, ...styles.back }}
            onClick={this.continue}
          >
            Continue
          </Button>
        </>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  list: {
    width: 300,
    margin: "0 auto" 
  }
};

export default FormConfirm;
