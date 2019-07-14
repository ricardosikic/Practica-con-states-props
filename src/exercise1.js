import React from 'react';
import logo from './logo.svg';
import './App.css';

export class Counter extends React.Component{
  state = {
    count: 0
  }

  add(e) {
    this.setState({
      count: this.state.count + 1
    })
  }

  rest(e) {
    this.setState({
      count: this.state.count -1
    })
  }

  render(){
    return(
      <div>
        <Button action={e => this.add(e)}/>
        <Numero count={this.state.count}/>
      </div>
    );
  }
}                                                         
  

// puedo pasar como props data ya sea objetos como tambien acciones, asi utilizo props
// con states de manera integra

const Numero = (props) => {
  return(
    <p>contador pasado como props: {props.count}</p>
  );
}

const Button = (props) => {
  return(
    <div>
      <button onClick={props.action}>Add</button>
    </div>
  );
}


