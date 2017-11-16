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
    };
  };
  getSymbol = (symbol) => {
    const state = this.state;
    state.symbol = symbol;
    this.setState(state);
  };
  dataToggle = () => {
    const state = this.state;
    state.showData = !state.showData;
    this.setState(state);
    console.log(state.showData)
  };
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">C<img src="http://img61.laughinggif.com/pic/HTTPS9zMy5hbWF6b25hd3MuY29tL2dkc2dpZmZpbGUuZ2FtZWRldmVsb3BlcnN0dWRpby5jb20vU3Bpbm5pbmdjb2luLS0xcTRxNngxcTlzNHQ2eTlwNTAuZ2lm.gif" />inTrack</h1>
        </header>
        
        <div className="App-links">
            <a href="#">About</a>
            <a href="https://github.com/cullenmooney">Contact</a>
        </div>

        <div className="Line">
        </div>
        
        <div className="Search">
          <Search getSymbol={this.getSymbol} showData={this.state.showData} dataToggle={this.dataToggle} symbol={this.state.symbol}/>      
        </div>

        <div className="Body">
          {this.state.showData ? <Data time={'INTRADAY'} symbol={this.state.symbol}/> : null}
          {this.state.showData ? <DataWeekly time={'WEEKLY'} symbol={this.state.symbol} /> : null}
          {this.state.showData ? <DataMonthly time={'MONTHLY'} symbol={this.state.symbol} /> : null}
        </div>
        
        <footer className="App-footer">
          <img className="Flag" src= "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Chicago%2C_Illinois.svg/255px-Flag_of_Chicago%2C_Illinois.svg.png" />
          <p className="Copyright">&copy;CoinTrack 2017</p>
        </footer>
      </div>
    );
  }
}

export default App;
