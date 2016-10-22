import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Chip from 'material-ui/Chip';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import curry from 'lodash/fp/curry';
import _ from 'lodash';


const styles = {
    paper: {
        padding: 20    
    },
    addButton: {
        marginLeft: 20
    },
    chip: {
        marginRight: 10,
        marginBottom: 10
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        paddingTop: 20,
        paddingBottom: 20
    }
};

export default class InviteTeamMembers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentText: '',
            emails: []
        };
    }

    addEmail = (event) => {
        this.setState(previousState => {
            previousState.emails = _.concat(previousState.emails, previousState.currentText);
            previousState.currentText = '';
            return previousState
        });
    }

    textChange = curry((name, event, value) => {
        this.setState(previousState => {
            previousState[name] = value
            return previousState
        });
    });

    removeEmail = (email) => {
        this.setState(previousState => {
            previousState.emails = _.filter(previousState.emails, email);
            return previousState
        });
    }

    renderChip(email) {
        return (
            <Chip
                key={email}
                onRequestDelete={() => this.removeEmail(email)}
                style={styles.chip}
                >
                {email}
            </Chip>
        );
    }

    render() {
        return (
             <Paper style={styles.paper} zDepth={1}>
                <h1>Invite team members</h1>
                <TextField
                    hintText='example@gmail.com'
                    floatingLabelText='Email'
                    floatingLabelFixed={true}
                    type='email'
                    value={this.state.currentText}
                    onChange={this.textChange('currentText')}
                />
                <FloatingActionButton mini={true} style={styles.addButton} zDepth={1} onClick={this.addEmail}>
                    <ContentAdd />
                </FloatingActionButton>
                <br />
                <div style={styles.wrapper}>
                    {this.state.emails.map(this.renderChip, this)}
                </div>
                <br />
                <RaisedButton onClick={() => this.props.onViewChange('Dashboard')} label="Next" primary={true} />
            </Paper>
        );
    }
}