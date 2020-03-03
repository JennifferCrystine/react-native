import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tweets from './components/Produto';

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      contador: ""
    }
  }


  updateContador = (numero) => {
    this.setState({contador: numero})
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Tweets do Neymar - Treinamento IN 2020.1
          </p>
          <h2>Contador de Tweets: {this.state.contador}</h2>
          <Tweets updateContador={this.updateContador} />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }

}



export default App;
