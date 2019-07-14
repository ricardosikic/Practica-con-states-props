import React, { Fragment } from 'react';


export class Practice4 extends React.Component {
    state = {
        username: 'bart'
    }
    
    // dispara la funcion
    handleUsername = (e) => {
        // debo capturar lo proveniente del input
        const word = e.target.value
        // console.log(word);
        // puedo actualizar el state object con el metodo setState
        this.setState({
            // le paso como valor al objeto la variable word
            username: word
        })
    }

    render(){
        return(
            <Fragment>
                <p>hola {this.state.username}</p>
                {/* manejador de evento on change */}
                <input onChange={e => this.handleUsername(e)} placeholder={this.state.username}></input>
                
            </Fragment>
        );
    }
}



