import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import curry from 'lodash/fp/curry';


const paperStyle = {
    padding: 20
};

export default class LookForPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            players: 0,
            date: '',
            time: ''
        };
    }

    myFacebookLogin = () => {
        let fbMessage = 'TeamMate Player Request - Our team is looking for ' + this.state.players + ' players to join us for a game on ' + this.state.date + ' at ' + this.state.time + '. If you are interested, please join our team at http://i.imgur.com/7dPyIyJ.jpg';        

        FB.login(function(){
            FB.api('/me/feed', 'post', {
                message: fbMessage
            });
        }, {scope: 'publish_actions'});
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

    render() {
        return (
            <Paper style={paperStyle} zDepth={1}>
                <h1>Look for player</h1>
                <p>Fill in the details below and click the link to log into Facebook and post a player request for an upcoming game</p>
                <br />
                <p>How many player are you looking for?</p>
                <TextField
                    hintText='2'
                    floatingLabelText='Number of players'
                    floatingLabelFixed={true}
                    type='number'
                    onChange={this.textChange('players')}
                />
                <p>What date is the game on?</p>
                <DatePicker
                    hintText="Date"
                    floatingLabelText='Date'
                    onChange={this.dateChange('date')}
                />
                <p>What time is the game?</p>
                <TimePicker
                    hintText='Time'
                    floatingLabelText='Time'
                    onChange={this.dateChange('time')} 
                />
                <br/>
                <RaisedButton label="Post player request" secondary={true} onClick={this.myFacebookLogin} />
            </Paper>
        );
    }
}