import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import curry from 'lodash/fp/curry';
import _ from 'lodash';

const sports = [
    {value: 'football', label: 'Football'},
    {value: 'hockey', label: 'Hockey'}
];

const levels = [
    {value: 'casual', label: 'Casual'},
    {value: 'amateur', label: 'Amateur'}
]

const paperStyle = {
    padding: 20
};

export default class TeamSignUp extends Component {
    state = { 
        team: '',
        sport: '',
        level: ''
    };

    handleChange = curry((name, event, index, value) => {
        this.setState(previousState => {
            previousState[name] = value
            return previousState
        });
    });

    textChange = curry((name, event, value) => {
        this.setState(previousState => {
            previousState[name] = value
            return previousState
        });
    });

    render() {
        return (
             <Paper style={paperStyle} zDepth={1}>
                <h1>Team creation</h1>
                <TextField
                    hintText='Stratford FC'
                    floatingLabelText='Team name'
                    floatingLabelFixed={true}
                    type='text'
                    onChange={this.textChange('team')}
                />
                <SelectField
                    floatingLabelText='Sport'
                    floatingLabelFixed={true}
                    value={this.state.sport}
                    onChange={this.handleChange('sport')}
                    maxHeight={200}
                >
                    {sports.map(sport => (<MenuItem value={sport.value} key={sport.value} primaryText={sport.label} />))}
                </SelectField>
                <br />
                <SelectField
                    floatingLabelText='Level'
                    floatingLabelFixed={true}
                    value={this.state.level}
                    onChange={this.handleChange('level')}
                    maxHeight={200}
                >
                    {levels.map(level => (<MenuItem value={level.value} key={level.value} primaryText={level.label} />))}
                </SelectField>
                <br />
                <br />
                <RaisedButton label="Next" primary={true} />
            </Paper>
        );
    }
}