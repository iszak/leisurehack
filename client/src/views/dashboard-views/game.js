import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import GoogleMap from 'google-map-react';


const styles = {
    paper: {
        padding: 20
    },
    map: {
        height: 250
    }
};

export default class Game extends Component {
    static defaultProps = {
        center: {lat: 51.6032123, lng: -0.0679276},
        zoom: 15
      };

    render() {
        return (
            <Paper style={styles.paper} zDepth={1}>
                <div style={styles.map}>
                    <GoogleMap
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}>
                    </GoogleMap>
                </div>
                <h2>Rotherham FC</h2>
                <span>2016-02-16 10:00am</span>
            </Paper>
        );
    }
}