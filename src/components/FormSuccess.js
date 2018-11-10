import React, { Component } from "react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

export class FormConfirm extends Component {


  render() {

    return (
      <MuiThemeProvider>
        <>
          <h1>Thank you for your submision</h1>
          <p>you will get an email. with further instrucions</p>
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
