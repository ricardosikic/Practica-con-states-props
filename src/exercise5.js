import React, { Fragment } from 'react';

export class Practice5 extends React.Component {
    state = {
        first: 'first',
        last: 'last'
    }
    
    handleFirst = (e) => {
        this.setState({
            first: e.target.value
        })
    }

    handleSecond = (e) => {
        this.setState({
            last: e.target.value
        })
    }

    render(){
        return(
            <Fragment>
                { this.state.first } { this.state.last }
                <UserForm id={'firstname'} label={'first name'} onChange={e => this.handleFirst(e)} />
                <UserForm id={'lastname'} label={'last name'} onChange={e => this.handleSecond(e)} />
            </Fragment>
        );
    }
}

// el ejercicio pide que desde un componente hijo actualize los estados del padre.

// componente hijo:
const UserForm = (props) => {
    return(
        <div>
            <label>{props.label}</label>
            <input id={props.id} type='text' onChange={props.onChange} ></input>
        </div>
    );
}