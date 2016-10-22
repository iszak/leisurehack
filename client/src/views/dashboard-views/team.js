import React, { Component } from 'react';
import Paper from 'material-ui/Paper';


const paperStyle = {
    padding: 20
};

export default class Team extends Component {
    render() {
        return (
            <Paper style={paperStyle} zDepth={1}>
                <h1>Team</h1>
            </Paper>
        );
    }
}