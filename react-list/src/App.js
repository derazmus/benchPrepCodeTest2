import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import QuoteTable from './components/quotetable';
import QuoteFilter from './components/quoteFilter';

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      quotes: [],
      currentFilter: "",
      currentTheme: "all",
      currentPage: 0,
    };
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/benchprep/dffc3bffa9704626aa8832a3b4de5b27/raw/b191cf3b6ea9cdcca8b363516ff969261398061f/quotes.json')
      .then(response => response.json())
      .then(data => this.setState({quotes: data}));
  }

  handlePageChange = pageNum => {
    this.setState({currentPage: pageNum});
  }

  handleThemeChange = theme => {
    this.setState({currentTheme: theme});
  }

  handleFilter = filter => {
    this.setState({currentFilter: filter})
  }

  render() {

    return (
      <div className="App">
        <p className="App-intro">
         React-List By Denise Appler Erazmus
        </p>
        <p>
          <QuoteFilter
            onThemeChange={this.handleThemeChange}
            onFilter={this.handleFilter}
            currentTheme={this.state.currentTheme}
          />
        </p>
        <QuoteTable 
          quotes={this.state.quotes}
          currentPage={this.state.currentPage}
          currentTheme={this.state.currentTheme}
          currentFilter={this.state.currentFilter}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default App;
