import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import curry from 'lodash/fp/curry';
import _ from 'lodash';


const sports = [
    {value: 'football', label: 'Football'},
    {value: 'hockey', label: 'Hockey'}
];

const genders = [
    {value: 'male', label: 'Male'},
    {value: 'female', label: 'Female'}
];

const positions = [
    {value: 'LB', label: 'Left Back'},
    {value: 'RB', label: 'Right Back'},
    {value: 'CB', label: 'Center Back'},
    {value: 'LM', label: 'Left Mid'},
    {value: 'RM', label: 'Right Mid'},
    {value: 'CM', label: 'Center Mid'},
    {value: 'ST', label: 'Striker'},
    {value: 'GK', label: 'Goalkeeper'}
]

const days = [
    {value: 'mon', label: 'Monday'},
    {value: 'tues', label: 'Tuesday'},
    {value: 'weds', label: 'Wednesday'},
    {value: 'thurs', label: 'Thursday'},
    {value: 'fri', label: 'Friday'},
    {value: 'sat', label: 'Saturday'},
    {value: 'sun', label: 'Sunday'}
]

const paperStyle = {
    padding: 20
};

export default class PlayerSignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sport: '',
            position: '',
            availability: [],
            gender: '',
            age: 0,
            weight: 0,
            height: 0
        };
    }

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

    checkChange = curry((value, event, bool) => {
        this.setState(previousState => {
            previousState.availability = (bool? _.concat:_.filter)(previousState.availability, value);
            return previousState
        });
    }); 

    render() {
        return (
             <Paper style={paperStyle} zDepth={1}>
                <h1>Player creation</h1>
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
                    floatingLabelText='Position'
                    floatingLabelFixed={true}
                    value={this.state.position}
                    onChange={this.handleChange('position')}
                    maxHeight={200}
                >
                    {positions.map(position => (<MenuItem value={position.value} key={position.value} primaryText={position.label} />))}
                </SelectField>
                <br />
                <List>
                    <Subheader>Availability</Subheader>
                    {days.map(day => (<ListItem primaryText={day.label} key={day.value}  leftCheckbox={<Checkbox onCheck={this.checkChange(day.value)} />} />))}
                </List>
                <br />
                <SelectField
                    floatingLabelText='Gender'
                    floatingLabelFixed={true}
                    value={this.state.position}
                    onChange={this.handleChange('gender')}
                    maxHeight={200}
                >
                    {genders.map(gender => (<MenuItem value={gender.value} key={gender.value} primaryText={gender.label} />))}
                </SelectField>
                <br />
                <TextField
                    hintText='25'
                    floatingLabelText='Age'
                    floatingLabelFixed={true}
                    type='number'
                    onChange={this.textChange('age')}
                />
                <TextField
                    hintText='70'
                    floatingLabelText='Weight (kg)'
                    floatingLabelFixed={true}
                    type='number'
                    onChange={this.textChange('weight')}
                />
                <TextField
                    hintText='180'
                    floatingLabelText='Height (cm)'
                    floatingLabelFixed={true}
                    type='number'
                    onChange={this.textChange('height')}
                />
                <br />
                <br />
                <RaisedButton onClick={() => this.props.onViewChange('TeamSignUp')} label="Next" primary={true} />
            </Paper>
        );
    }
}