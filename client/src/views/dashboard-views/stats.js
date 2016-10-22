import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';


const games = [
    {id: 0, opponent: 'Rotherham FC', date: '2016-02-16', time: '10:00am'},
    {id: 1, opponent: 'Dulston United', date: '2016-02-23', time: '10:00am'},
]

const styles = {
    paper: {
        padding: 20,
        marginBottom: 10
    },
    inlineGame: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    gameDeets: {
        marginBottom: 20
    },
    gameDeet: {
        display: 'block'
    },
    gameButton: {
        marginLeft: 'auto',
        boxShadow: 'none'
    }
};

export default class Stats extends Component {
    render() {
        return (
            <div>
                <Paper style={styles.paper} zDepth={1}>
                    <h2>Scheduled games</h2>
                    {games.map(game => (<div key={game.id} style={styles.inlineGame}>
                        <div style={styles.gameDeets}>
                            <span style={styles.gameDeet}>{game.opponent}</span>
                            <span style={styles.gameDeet}>{game.date} - {game.time}</span>
                        </div>
                        <RaisedButton style={styles.gameButton} label="View game" secondary={true} onClick={() => this.props.onViewChange('Game')} />
                    </div>))}
                </Paper>
            </div>
        );
    }
}