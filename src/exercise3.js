import React, { Fragment } from 'react';

export class Practice3 extends React.Component {
    state = {
        username: 'mono'
    }
    render() {
        return(
            <Fragment>
                <p>username: {this.state.username}</p>
            </Fragment>
        );
    }
}