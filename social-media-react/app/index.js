var person={
	name: 'Manuel Valles',
	location: 'London, UK',
	occupation: {
		title: 'FrontEnd Developer',
		employer: 'A lucky person/company'
	},
	photo: './img/rubikicon.jpg',
	updates: [
		{
			platform: 'twitter',
			status: "I'm happy, hope you're happy too!"
		},			
		{
			platform: 'twitter',
			status: "The better the singer's voice, the harder it is ti hear what they're saying"
		},
		{
			platform: 'twitter',
			status: "Fear makes the wold look bigger"
		},
		{
			platform: 'facebook',
			status: "If you're working on something that you think is going to get accomplished in this lifetime then you're not thinking big enough"
		}
	]
}

class Photo extends React.Component{
	render(){
		return(
			<div className="photo">
				<img src="img/rubikicon.jpg" alt="RubikIcon"/>
			</div>
		)
	}
}	

class Bio extends React.Component{
	render(){
		return(
			<div className="bio">
				<h1 className="name">Manu.name</h1>
				<h2 className="location">London, UK</h2>
				<div className="occupation">
					<p>Looking for a FrontEnd Developer job</p>
				</div>
			</div>	
		)
	}
}	

class Updates extends React.Component{
	render(){
		return(
			<div className="updates">
				<ul>
					<li className="update">updates</li>
					<li className="update">updates</li>
				</ul>
			</div>	
		)
	}
}

class Card extends React.Component{
	render(){
		return(
			<div className="card">
				<Photo />
				<Bio />
				<Updates />	
			</div>
		)
	}
}

ReactDOM.render(<Card />, document.getElementById('app'));