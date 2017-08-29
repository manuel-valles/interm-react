var React = require('react');
var ReactDOM = require('react-dom');
var products = require('./products.js');

class Results extends React.Component{
	componentWillReceiveProps(nextProps){
		console.log(nextProps.products);
	}
	render(){
		return(
			<div className="results">
				<div className="in-stock">
					<h2><a href="#">Toothpaste</a></h2>
					<p>$2.99</p>
					<p>Lorem Ipsum is simply dummy text of the printing and 
					typesetting industry. Lorem Ipsum has been the industry's 
					standard dummy text ever since the 1500s, when an unknown 
					printer took a galley of type and scrambled it to make a type 
					specimen book.</p>
				</div>
			
			</div>
		)
	}
}

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

class Search extends React.Component{
	constructor(props){
		super(props);
		this.state={
			query:''
		};
	}
	handleQuery(query){
		this.setState({'query': query.toLowerCase().trim()})
	}
	render(){
		return(
			<div className="search">
				<SearchBar onQuery={this.handleQuery.bind(this)}/>
				<Results products={this.props.products} query={this.state.query}/>
				
			</div>
		);
	}
}

ReactDOM.render(<Search products={products}/>, document.getElementById('app'));