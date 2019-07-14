import React, { Fragment } from 'react';

export class ResetName extends React.Component {
    state = {
        name: 'Bart'
    }
    
    change(e) {
        // metodo que pasa como parametro un objeto
        this.setState({
            name: 'Lisa'
        })
    }

    render(){
        return(
            <Fragment>
                {/* para pasar data via props a los hijos, debo llamarlos en la funcion return */}
                <Button action={e => this.change(e)} />
                <NewName  {...this.state}/>
            </Fragment>
        );
    }
}

// se les pasara data del ojeto state entre componentes mediante props (del padre a hijos)
// pero ademas desde el hijo podre cambiar el state del padre.

const NewName = (props) => {
    const {name} = props;
    return(
        <h1>hello {name}</h1>
    );
}

const Button = (props) => {
    return(
        <button onClick={props.action}>Cambia el nombre</button>
    );
}