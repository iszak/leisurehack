import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import Stats from './dashboard-views/stats';
import ScheduleGame from './dashboard-views/schedule-game';
import LookForPlayer from './dashboard-views/look-for-player';



export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            childView: 'Stats',
            open: false
        };
    }

    handleToggle = () =>  {
        this.setState(previousState => {
            previousState.open = true;
            return previousState
        });
    }

    handleChildViewChange = (view) => {
        this.setState(previousState => {
            previousState.open = false;
            previousState.childView = view;
            return previousState
        });
    }

    render() {
        let view;

        switch(this.state.childView) {
            case 'Stats':
                view = <Stats />
                break;
            case 'ScheduleGame':
                view = <ScheduleGame />
                break;
            case 'LookForPlayer':
                view = <LookForPlayer />
                break;
            default:
                view = <Stats />
        }

        return (
            <div>
                <div>
                    <AppBar
                        title="TeamMate"
                        iconElementLeft={
                            <IconButton onTouchTap={this.handleToggle}>
                                <NavigationMenu />
                            </IconButton>
                        }
                    />
                    <br />
                    <Drawer
                        docked={false}
                        width={200}
                        open={this.state.open}
                        onRequestChange={(open) => this.setState.open = open}
                    >
                        <MenuItem onTouchTap={() => this.handleChildViewChange('Stats')}>Dashboard</MenuItem>
                        <MenuItem onTouchTap={() => this.handleChildViewChange('ScheduleGame')}>Schedule game</MenuItem>
                        <MenuItem onTouchTap={() => this.handleChildViewChange('LookForPlayer')}>Look for player</MenuItem>
                    </Drawer>
                </div>
                <div>
                    {view}
                </div>
            </div>
        );
    }
}