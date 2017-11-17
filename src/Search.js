import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import './Search.css';

const currencies = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    image: <img src='https://files.coinmarketcap.com/static/img/coins/32x32/bitcoin.png'/>
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    image: <img src='https://files.coinmarketcap.com/static/img/coins/32x32/ethereum.png' />
  },
  {
    name: 'Bitcoin Cash',
    symbol: 'BCH',
    image: <img src='https://files.coinmarketcap.com/static/img/coins/32x32/bitcoin-cash.png' />
  },
  {
    name: 'Ripple',
    symbol: 'XRP',
    image: <img src='https://files.coinmarketcap.com/static/img/coins/32x32/ripple.png' />
  },
  {
    name: 'Litecoin',
    symbol: 'LTC',
    image: <img src='https://files.coinmarketcap.com/static/img/coins/32x32/litecoin.png' />
  },
  {
    name: 'Dash',
    symbol: 'DASH',
    image: <img src='https://files.coinmarketcap.com/static/img/coins/32x32/dash.png' />
  },
  {
    name: 'Iota',
    symbol: 'IOT',
    image: <img src='https://files.coinmarketcap.com/static/img/coins/32x32/iota.png' />
  },
  {
    name: 'NEO',
    symbol: 'ANS',
    image: <img src='https://files.coinmarketcap.com/static/img/coins/32x32/neo.png' />
  },
  {
    name: 'Monero',
    symbol: 'XMR',
    image: <img src='https://files.coinmarketcap.com/static/img/coins/32x32/monero.png' />
  },
  {
    name: 'NEM',
    symbol: 'XEM',
    image: <img src='https://files.coinmarketcap.com/static/img/coins/32x32/nem.png' />
  },
  {
    name: 'Ethereum Classic',
    symbol: 'ETC',
    image: <img src='https://files.coinmarketcap.com/static/img/coins/32x32/ethereum-classic.png' />
  },
  {
    name: 'Lisk',
    symbol: 'LSK',
    image: <img src='https://files.coinmarketcap.com/static/img/coins/32x32/lisk.png' />
  },
  {
    name: 'Qtum',
    symbol: 'QTUM',
    image: <img src='https://files.coinmarketcap.com/static/img/coins/32x32/qtum.png' />
  },
  {
    name: 'Zcash',
    symbol: 'ZEC',
    image: <img src='https://files.coinmarketcap.com/static/img/coins/32x32/zcash.png' />
  },
  {
    name: 'Waves',
    symbol: 'WAVES',
    image: <img src='https://files.coinmarketcap.com/static/img/coins/32x32/waves.png' />
  },
  {
    name: 'Stratis',
    symbol: 'STRAT',
    image: <img src='https://files.coinmarketcap.com/static/img/coins/32x32/stratis.png' />
  },
  {
    name: 'Stellar',
    symbol: 'XLM',
    image: <img src='https://files.coinmarketcap.com/static/img/coins/32x32/stellar.png' />
  },
  {
    name: 'BitShares',
    symbol: 'BTS',
    image: <img src='https://files.coinmarketcap.com/static/img/coins/32x32/bitshares.png' />
  },
  {
    name: 'PIVX',
    symbol: 'PIVX',
    image: <img src='https://files.coinmarketcap.com/static/img/coins/32x32/pivx.png' />
  },
  {
    name: 'GameCredits',
    symbol: 'GAME',
    image: <img src='https://files.coinmarketcap.com/static/img/coins/32x32/gamecredits.png' />
  },
  {
    name: 'Metaverse ETP',
    symbol: 'ETP',
    image: <img src='https://files.coinmarketcap.com/static/img/coins/32x32/metaverse.png' />
  },
  {
    name: 'Lykke',
    symbol: 'LKK',
    image: <img src='https://files.coinmarketcap.com/static/img/coins/32x32/lykke.png' />
  },
  {
    name: 'Verge',
    symbol: 'XVG',
    image: <img src='https://files.coinmarketcap.com/static/img/coins/32x32/verge.png' />
  },
  {
    name: 'DigiByte',
    symbol: 'DGB',
    image: <img src='https://files.coinmarketcap.com/static/img/coins/32x32/digibyte.png' />
  },
  {
    name: 'Nxt',
    symbol: 'NXT',
    image: <img src='https://files.coinmarketcap.com/static/img/coins/32x32/nxt.png' />
  }  
];

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : currencies.filter(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

const getSuggestionValue = suggestion => suggestion.symbol;

const renderSuggestion = suggestion => (
  <div>
    {suggestion.image} {suggestion.name} ({suggestion.symbol})
  </div>
);

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: [],
      image: ''
    };
  }

 

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
    this.setState({
      value: suggestionValue
    }) 
    this.props.getSymbol(suggestionValue);
    this.props.dataToggle();
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Type a digital currency here',
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionSelected={this.onSuggestionSelected}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

export default Search;