import React, { Component } from 'react';
import './App.css';
import Search from './Search.js';
import Data from './Data.js';
import DataWeekly from './DataWeekly.js';
import DataMonthly from './DataMonthly.js';

class App extends Component {
  constructor() {
    super()

    this.state={
      showData: false,
      symbol: ''
    }
  }
  getSymbol = (symbol) => {
    const state = this.state;
    state.symbol = symbol;
    this.setState(state);
  }
  dataToggle = () => {
    const state = this.state;
    state.showData = !state.showData;
    this.setState(state);
    console.log(state.showData)
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">DIGITAL CURRENCY TRACKER</h1>
        </header>
        <Search getSymbol={this.getSymbol} showData={this.state.showData} dataToggle={this.dataToggle} symbol={this.state.symbol}/>      
        {this.state.showData ? <Data time={'INTRADAY'} symbol={this.state.symbol}/> : null}
        {this.state.showData ? <DataWeekly time={'WEEKLY'} symbol={this.state.symbol} /> : null}
        {this.state.showData ? <DataMonthly time={'MONTHLY'} symbol={this.state.symbol} /> : null}
      </div>
    );
  }
}

export default App;
