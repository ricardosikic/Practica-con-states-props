import React, { Fragment } from 'react';

export class Practice6 extends React.Component {
    state = {
        count: 0
    }
    
    increase = (e) => {
        this.setState({
            count: this.state.count + 1
        })
    }
    
    decrease = (e) => {
        this.setState({
            count: this.state.count - 1
        })
    }

    reset = () => {
        this.setState({
            count: 0
        })
    }

    render() {
        return(
            <Fragment>
                <h4>add, decrement, reset</h4>
                <Header count={this.state.count}/>
                <Button click={e => this.increase(e)} text='+'/>
                <Button click={e => this.decrease(e)} text='-'/>
                <Button click={e => this.reset(e)} text='reset' />
            </Fragment>
        );
    }
}

const Header = (props) => {
    return(
        <Fragment>
            <h3>{props.count}</h3>
        
        </Fragment>
    );
}

// componente boton que almacenara las acciones que pasaran como props y que actualizaran al padre.
// les pase los props como funciones y textos
const Button = (props) => {
    return(
        <Fragment>
            <button onClick={props.click}>{props.text}</button>
           
        </Fragment>
    );
}