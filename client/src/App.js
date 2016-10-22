import React, { Component } from 'react';
import PlayerSignUp from './views/player-sign-up';
import SignUp from './views/sign-up';
import TeamSignUp from './views/team-sign-up';
import InviteTeamMembers from './views/invite-team-members';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
            <SignUp />
        </MuiThemeProvider>
    );
  }
}
