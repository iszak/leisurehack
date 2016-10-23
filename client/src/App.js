import React, { Component } from 'react';
import SignUp from './views/sign-up';
import PlayerSignUp from './views/player-sign-up';
import TeamSignUp from './views/team-sign-up';
import InviteTeamMembers from './views/invite-team-members';
import Dashboard from './views/dashboard';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'Dashboard'
        };
    }

    handleViewChange = (view) => {
        this.setState(previousState => {
            previousState.view = view
            return previousState
        });
    }

    render() {
        let view;

        switch(this.state.view) {
            case 'SignUp':
                view = <SignUp onViewChange={this.handleViewChange} />
                break;
            case 'PlayerSignUp':
                view = <PlayerSignUp onViewChange={this.handleViewChange} />
                break;
            case 'TeamSignUp':
                view = <TeamSignUp onViewChange={this.handleViewChange} />
                break;
            case 'InviteTeamMembers':
                view = <InviteTeamMembers onViewChange={this.handleViewChange} />
                break;
            case 'Dashboard':
                view = <Dashboard onViewChange={this.handleViewChange} />
                break;
            default:
                view = <Dashboard onViewChange={this.handleViewChange} />
        }

        return (
            <MuiThemeProvider>
                {view}
            </MuiThemeProvider>
        );
    }
}
