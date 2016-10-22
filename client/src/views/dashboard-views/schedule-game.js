import React, { Component } from 'react';
import Paper from 'material-ui/Paper';


const paperStyle = {
    padding: 20
};

export default class ScheduleGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opponent: '',
        };
    }

    render() {
        return (
            <Paper style={paperStyle} zDepth={1}>
                <h1>Schedule game</h1>

            </Paper>
        );
    }
}