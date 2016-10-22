import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import curry from 'lodash/fp/curry';

const players = [
    {id: 1, firstName: 'John', lastName: 'Bishop'},
    {id: 2, firstName: 'Ben', lastName: 'Robinson'},
    {id: 3, firstName: 'Charles', lastName: 'Smith'},
    {id: 4, firstName: 'Gordon', lastName: 'Lovesgood'}
];

const paperStyle = {
    padding: 20
};

export default class ScheduleGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opponent: '',
            date: '',
            time: '',
            address: '',
            players: []
        };
    }

    textChange = curry((name, event, value) => {
        this.setState(previousState => {
            previousState[name] = value
            return previousState
        });
    });

    dateChange = curry((name, nada, value) => {
        this.setState(previousState => {
            previousState[name] = value;
            return previousState
        });
    });

    checkChange = curry((value, event, bool) => {
        this.setState(previousState => {
            previousState.players = (bool? _.concat:_.filter)(previousState.players, value);
            return previousState
        });
    });

    render() {
        return (
            <Paper style={paperStyle} zDepth={1}>
                <h1>Schedule game</h1>
                <TextField
                    hintText='Rotherham FC'
                    floatingLabelText='Opponent'
                    floatingLabelFixed={true}
                    type='text'
                    onChange={this.textChange('opponent')}
                />
                <DatePicker
                    hintText="Date"
                    floatingLabelText='Date'
                    onChange={this.dateChange('date')}
                />
                <TimePicker
                    hintText='Time'
                    floatingLabelText='Time'
                    onChange={this.dateChange('time')} 
                />
                <TextField
                    hintText='67 Made Up Road, London E14 3PQ'
                    floatingLabelText='Address'
                    floatingLabelFixed={true}
                    type='text'
                    onChange={this.textChange('address')}
                />
                <br />
                <List>
                    <Subheader>Invite players</Subheader>
                    {players.map(player => (<ListItem primaryText={player.firstName + ' ' + player.lastName} key={player.id}  leftCheckbox={<Checkbox onCheck={this.checkChange(player.id)} />} />))}
                </List>
                <br />
                <RaisedButton label="Add Game" primary={true} />
            </Paper>
        );
    }
}