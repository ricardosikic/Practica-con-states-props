import React, { Fragment } from 'react';
import './App.css';

export class InfoUser extends React.Component {
    
    // setear el obj state inicial
    state = {
        info: [],
        arrayInfo: [],
        isOpen: false
    }

    // tomo la data proveniente de los inputs y la guardo como un objeto.
    // luego seteo la data del objeto state y lo actualizo
    handleData = (e) => {
       const {name, value} = e.target;
       const inputs = { [name]: value };
    // al array info le meto la data proveniente de los inputs mediante spread
       const newData = {...this.state.info, ...inputs}
       this.setState({
           info: newData
       })
    
    }
    
    // al evento onClick disparo la funcion setData que actualiza el valor de isOpen
    // isOpen a su vez mediante un ternario activa una clase de css que setea display: block
    setData = (e) => {
        e.preventDefault();
        const setInfo = this.state.info;
        this.setState({
            arrayInfo: this.state.arrayInfo.concat(setInfo),
            isOpen: true
        })    
    }


    render() {
        console.log('objeto ',this.state.arrayInfo);
        return(
          <Fragment>
            <form>
                <div className="form-group">
                    <input className="form-control" placeholder="username" name="username" onChange={e => this.handleData(e)}></input>
                </div>
                <div className="form-group">
                    <input className="form-control" placeholder="email" name="email" onChange={e => this.handleData(e)}></input>
                </div>
                <button className="btn btn-success" onClick={e => this.setData(e)}>Send</button>
            </form>
            <IsModal {...this.state}/>
          </Fragment>
        );
    }
}

// el modal es un componente hijo que renderiza la informacion contenida en el padre
// lo cual para pasar esa data al hijo mediante atributos, paso como argumento props
// la cual contiene los datos que podre utilizar mediante la descontruccion de props.
const IsModal = (props) => {
    const {info, arrayInfo, isOpen} = props;
    let inf = arrayInfo.map((user, i) => {
        return(
            <div key={i}>
            <p>user: {user.username}</p>
            <p>mail: {user.email}</p>
            </div>
        )
    })
    return(
        <Fragment>
            <div id="contain" className={isOpen ? 'isOpen' : ''}>
               {inf}
            </div>
        </Fragment>
    );
}