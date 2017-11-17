import React, { Component } from 'react';

class DataMonthly extends Component {
	constructor(props) {
		super(props)

		this.state={
			loading: true,
			data: [],
			coinName: '',
			coinMonthInfo: '',
			coinMonthTime: '',
			coinMonthObject: '',
			coinMonthHigh: '',
			coinMonthLow: '',
			coinMonthVolume: '',
			coinMonthCap: ''
		}
	}

	componentDidMount() {
    	fetch('https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_' + this.props.time + '&symbol=' + this.props.symbol + '&market=USD&apikey=TQ7HS3L2TEMH2FHP')
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
		state.coinMonthInfo = this.state.data[ "Meta Data" ][ "1. Information" ]
		state.coinMonthTime = Object.keys(this.state.data[ "Time Series (Digital Currency Monthly)" ])[0];
		state.coinMonthObject = this.state.data["Time Series (Digital Currency Monthly)"][state.coinMonthTime];
		// coinDayObject gives us the data for that time
		state.coinMonthHigh = state.coinMonthObject[Object.keys(state.coinMonthObject)[2]];
		state.coinMonthLow = state.coinMonthObject[Object.keys(state.coinMonthObject)[4]];
		state.coinMonthVolume = state.coinMonthObject[Object.keys(state.coinMonthObject)[8]];
		state.coinMonthCap = state.coinMonthObject[Object.keys(state.coinMonthObject)[9]];
		this.setState(state);
	}

	render() {

		let content;

		if(this.state.loading) {
			content = <div> <img className='Loader' src='https://loading.io/spinners/ellipsis/lg.discuss-ellipsis-preloader.gif' /> </div>
		} else {
			content =

		<div> 
			<div>
				<h5>{this.state.coinMonthInfo}</h5>
				<h5>Month Of: {this.state.coinMonthTime}</h5>
				<p>	High: ${(Math.round(this.state.coinMonthHigh * 100) / 100).toLocaleString()} | 
					Low: ${(Math.round(this.state.coinMonthLow * 100) / 100).toLocaleString()} | 
					Volume: ${(Math.round(this.state.coinMonthVolume * 100) / 100).toLocaleString()} | 
					Market Cap: ${(Math.round(this.state.coinMonthCap * 100) / 100).toLocaleString()}</p>
			</div>
		</div>
		}

		return (
			<div>{content}</div>
		)		
	
	
	}
}
export default DataMonthly;
