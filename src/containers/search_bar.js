import React, {Component} from 'react';

export default class SearchBar extends Component {
	render() {
		return (
			<form className="navbar-form navbar-left" role="search">
				<div className="form-group">
					<input type="text" className="form-control" placeholder="Search"/>
					<button type="submit" className="btn btn-default">Submit</button>
				</div>
			</form>
		);
	}
}