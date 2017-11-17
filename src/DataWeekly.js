import React, { Component } from 'react';

class DataWeekly extends Component {
	constructor(props) {
		super(props)

		this.state={
			loading: true,
			data: [],
			coinName: '',
			coinWeekInfo: '',
			coinWeekTime: '',
			coinWeekObject: '',
			coinWeekHigh: '',
			coinWeekLow: '',
			coinWeekVolume: '',
			coinWeekCap: ''
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
		state.coinWeekInfo = this.state.data[ "Meta Data" ][ "1. Information" ]
		state.coinWeekTime = Object.keys(this.state.data[ "Time Series (Digital Currency Weekly)" ])[1];
		state.coinWeekObject = this.state.data["Time Series (Digital Currency Weekly)"][state.coinWeekTime];
		// coinDayObject gives us the data for that time
		state.coinWeekHigh = state.coinWeekObject[Object.keys(state.coinWeekObject)[2]];
		state.coinWeekLow = state.coinWeekObject[Object.keys(state.coinWeekObject)[4]];
		state.coinWeekVolume = state.coinWeekObject[Object.keys(state.coinWeekObject)[8]];
		state.coinWeekCap = state.coinWeekObject[Object.keys(state.coinWeekObject)[9]];
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
					<h5>{this.state.coinWeekInfo}</h5>
					<h5>Week Of: {this.state.coinWeekTime}</h5>
					<p>	High: ${(Math.round(this.state.coinWeekHigh * 100) / 100).toLocaleString()} |
						Low: ${(Math.round(this.state.coinWeekLow * 100) / 100).toLocaleString()} | 
						Volume: ${(Math.round(this.state.coinWeekVolume * 100) / 100).toLocaleString()} |
						Market Cap: ${(Math.round(this.state.coinWeekCap * 100) / 100).toLocaleString()}</p>
					<div className="LineTwo">
        			</div>
				</div>
		</div>

		}

		return (
			<div>{content}</div>
		)		
	
	}
}
export default DataWeekly;