import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      quotes: []
    }

  async function fetchData() {
    let data = await(await fetch ('https://gist.githubusercontent.com/benchprep/dffc3bffa9704626aa8832a3b4de5b27/raw/b191cf3b6ea9cdcca8b363516ff969261398061f/quotes.json')).json();
    return data;
  }

  fetchData()
    .then(data => console.log(data))
}

 


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React List</h1>
          <h1 className= "App-title"> By Denise Appler Erazmus </h1>
        </header>   
      </div>
    );
  }
}

export default App;
