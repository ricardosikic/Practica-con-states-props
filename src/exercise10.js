import React, { Fragment } from 'react';

export class Practice10 extends React.Component {
    // iniciar un objeto state 
    state = {
        count: 0
    }
    
    handleAdd = (e) => {
        this.setState({
            // le paso el estado inicial + 1
            count: this.state.count + 1
        })
    }

    handleRest = (e) => {
        this.setState({
            count: this.state.count -1
        })
    }

    handleReset = (e) => {
        this.setState({
            count: 0
        })
    }


    render(){
        return(
            <Fragment>
                <h1>presiona botones</h1>
                <Boton funcion={e => this.handleAdd(e)} text={'agrega'}/>
                <Boton funcion={e => this.handleRest(e)} text={'resta'}/>
                <Boton funcion={e => this.handleReset(e)} text={'resetear'}/>
                <Counter valor={this.state.count}/>
            </Fragment>
        );
    }
}

const Boton = (props) => {
    return(
        <Fragment>
            <button onClick={props.funcion}>{props.text}</button>
        </Fragment>
    )
}


// componente funcional counter (hijo) consumira data del state del padre.
const Counter = (props) => {
    return(
        <Fragment>
            <h1>Unidades: {props.valor}</h1>
        </Fragment>
    )
}