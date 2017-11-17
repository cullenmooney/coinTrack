import React, { Component } from 'react';

class Data extends Component {
	constructor(props) {
		super(props)

		this.state={
			loading: true,
			data: [],
			coinName: '',
			coinDayInfo: '',
			coinDayTime: '',
			coinDayObject: '',
			coinDayPrice: '',
			coinDayVolume: '',
			coinDayCap: ''
		}
	}

	componentDidMount() {
    	fetch('https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_' + this.props.time + '&symbol=' + this.props.symbol + '&market=USD&apikey=4TXTB5LFORS5I6F9')
    	.then(response => response.json())
    	.then(data=> {
      		const state = this.state;
      		state.data = data;
      		state.loading = false;
      		this.setState(state);
      		this.setValues();
    	})

	}

	setValues = () => {
		const state = this.state;
		state.coinName = this.state.data[ "Meta Data" ][ "3. Digital Currency Name" ]
		state.coinDayInfo = this.state.data[ "Meta Data" ][ "1. Information" ]
		state.coinDayTime = Object.keys(this.state.data[ "Time Series (Digital Currency Intraday)" ])[0];
		state.coinDayObject = this.state.data["Time Series (Digital Currency Intraday)"][state.coinDayTime];
		// coinDayObject gives us the data for that time
		state.coinDayPrice = state.coinDayObject[Object.keys(state.coinDayObject)[0]];
		state.coinDayVolume = state.coinDayObject[Object.keys(state.coinDayObject)[2]];
		state.coinDayCap = state.coinDayObject[Object.keys(state.coinDayObject)[3]];
		this.setState(state);
	}

	render() {

		let content;

		if(this.state.loading) {
			content = <div> <img className='Loader' src='https://loading.io/spinners/ellipsis/lg.discuss-ellipsis-preloader.gif' /> </div>
		} else {
			return (
			content =
		

	
		<div>
				<div className="DayData">
					<div className="Name">
						<h1 className="Coin-name">{this.state.coinName}</h1> <button className="X-button" onClick={this.props.dataToggle}>X</button>
					</div>
					<h5>{this.state.coinDayInfo}</h5>
					<h5>Current Time: {this.state.coinDayTime}</h5>
					<div>
						<p>Price: ${(Math.round(this.state.coinDayPrice * 100) / 100).toLocaleString()} |
							Volume: ${(Math.round(this.state.coinDayVolume * 100) / 100).toLocaleString()} | 
							Market Cap: ${(Math.round(this.state.coinDayCap * 100) / 100).toLocaleString()}</p>
					</div>
					<div className="LineTwo">
        			</div>
				</div>
		</div>	
	)
	}

	return (
		<div>{content}</div>
	)
	
	}
}
export default Data;