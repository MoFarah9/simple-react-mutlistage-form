import React, { Component } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CssBaseline />
        <AppBar postion="static">
            <Toolbar>
              <Typography variant="h6" color="inherit">
                Enter User Details
              </Typography>
            </Toolbar>
        </AppBar>
        <UserForm />
      </div>
    );
  }
}

export default App;
