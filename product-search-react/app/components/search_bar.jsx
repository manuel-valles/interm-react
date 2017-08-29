var React = require('react');

class SearchBar extends React.Component{
	handleQuery(e){
		this.props.onQuery(e.target.value);
	}
	render(){
		return(
			<div className="search-bar">
				<input onChange={this.handleQuery.bind(this)} type="text" placeholder="Search"/>
			</div>
		);
	}
}

module.exports = SearchBar;