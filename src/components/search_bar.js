import React, { Component } from 'react';


class SearchBar extends Component {
	constructor(props) {
		// get props
		super(props);

		// bind classes
		this.onInputChange=this.onInputChange.bind(this)

		// set initialstate
		this.state = { term: ' '};
	}

	render() {
		return (
			<div className="search-bar">
			<input 
				value={this.state.term}
				onChange= {event => this.onInputChange(event.target.value)} />
			
			</div>
			);
	}

	onInputChange(term){
		this.setState({term: term});
		this.props.onSearch(term)
	}

};


export default SearchBar;