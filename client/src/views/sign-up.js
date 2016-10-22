import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import curry from 'lodash/fp/curry';
import _ from 'lodash';


const paperStyle = {
    padding: 20
};

export default class SignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        password: '',
        email: ''
    };

    textChange = curry((name, event, value) => {
        this.setState(previousState => {
            previousState[name] = value
            return previousState
        });
    });

    render() {
        return (
             <Paper style={paperStyle} zDepth={1}>
                <h1>Sign up</h1>
                <TextField
                    hintText='Joe'
                    floatingLabelText='First Name'
                    floatingLabelFixed={true}
                    type='text'
                    onChange={this.textChange('firstName')}
                />
                <TextField
                    hintText='Blogs'
                    floatingLabelText='Last Name'
                    floatingLabelFixed={true}
                    type='text'
                    onChange={this.textChange('lastName')}
                />
                <TextField
                    hintText='example@gmail.com'
                    floatingLabelText='Email'
                    floatingLabelFixed={true}
                    type='email'
                    onChange={this.textChange('email')}
                />
                <TextField
                    hintText='********'
                    floatingLabelText='Password'
                    floatingLabelFixed={true}
                    type='password'
                    onChange={this.textChange('password')}
                />
                <br />
                <br />
                <RaisedButton label="Sign Up" primary={true} />
            </Paper>
        );
    }
}