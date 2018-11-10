import React, { Component } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import CssBaseline from '@material-ui/core/CssBaseline'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CssBaseline />
        <UserForm />
      </div>
    );
  }
}

export default App;
