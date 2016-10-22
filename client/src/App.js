import React, { Component } from 'react';
import PlayerSignUp from './views/player-sign-up';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
            <PlayerSignUp />
        </MuiThemeProvider>
    );
  }
}
