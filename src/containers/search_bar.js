import React, {Component} from 'react';

import actions from '../actions/index';

const url = "http://api.openweathermap.org/data/2.5/forecast?q="+{}+",us&mode=json&appid="

export default class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: ''};

		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(event) {
		console.log(event.target.value);
		this.setState({ term: event.target.value });
	}


	onFormSubmit(event) {
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="navbar-form navbar-left" role="search">
				<div className="form-group">
					<input 
						type="text" 
						className="form-control" 
						placeholder="Get a five-day forecast in your favorite cities"
						value={this.state.term}
						onChange={this.onInputChange}
					/>
					<button type="submit" className="btn btn-default">Submit</button>
				</div>
			</form>
		);
	}
}