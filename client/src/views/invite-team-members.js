import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Chip from 'material-ui/Chip';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import curry from 'lodash/fp/curry';
import _ from 'lodash';


const paperStyle = {
    padding: 20
};

export default class InviteTeamMembers extends Component {
    state = { emails: [] };

    renderChip(data) {
        return (
            <Chip
                key={data.key}
                onRequestDelete={() => this.handleRequestDelete(data.key)}
                style={this.styles.chip}
                >
                {data.label}
            </Chip>
        );
    }

    render() {
        return (
             <Paper style={paperStyle} zDepth={1}>
                <h1>Invite team members</h1>
                <TextField
                    hintText='example@gmail.com'
                    floatingLabelText='Email'
                    floatingLabelFixed={true}
                    type='email'
                />
                <FloatingActionButton mini={true}>
                    <ContentAdd />
                </FloatingActionButton>
                <br />
                <div>
                    {this.state.emails.map(this.renderChip, this)}
                </div>
                <br />
                <br />
                <RaisedButton label="Next" primary={true} />
            </Paper>
        );
    }
}