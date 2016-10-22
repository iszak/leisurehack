import React, { Component } from 'react';
import Paper from 'material-ui/Paper';


const paperStyle = {
    padding: 20
};

export default class Game extends Component {
    render() {
        return (
            <Paper style={paperStyle} zDepth={1}>
                <h1></h1>
            </Paper>
        );
    }
}