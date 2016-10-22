import React, { Component } from 'react';
import Paper from 'material-ui/Paper';


const paperStyle = {
    padding: 20
};

export default class Stats extends Component {
    render() {
        return (
            <Paper style={paperStyle} zDepth={1}>
                <h1>Stats</h1>
            </Paper>
        );
    }
}