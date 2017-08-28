var person = {
	name: 'Manuel Valles',
	location: 'London, UK',
	occupation: {
		title: 'FrontEnd Developer',
		employer: 'a lucky person/company'
	},
	photo: './img/rubikicon.jpg',
	updates: [{
		platform: "twitter",
		status: "I'm happy, hope you're happy too!"
	}, {
		platform: 'twitter',
		status: "The better the singer's voice, the harder it is ti hear what they're saying"
	}, {
		platform: 'twitter',
		status: "Fear makes the wold look bigger"
	}, {
		platform: 'facebook',
		status: "If you're working on something that you think is going to get accomplished in this lifetime then you're not thinking big enough"
	}]
};

class Photo extends React.Component {
	render() {
		return React.createElement(
			'div',
			{ className: 'photo' },
			React.createElement('img', { src: this.props.image, alt: 'RubikIcon' })
		);
	}
}

class Bio extends React.Component {
	render() {
		return React.createElement(
			'div',
			{ className: 'bio' },
			React.createElement(
				'h1',
				{ className: 'name' },
				this.props.name
			),
			React.createElement(
				'h2',
				{ className: 'location' },
				this.props.location
			),
			React.createElement(
				'div',
				{ className: 'occupation' },
				React.createElement(
					'p',
					null,
					this.props.occupation.title,
					' for ',
					this.props.occupation.employer,
					'.'
				)
			)
		);
	}
}

class Updates extends React.Component {
	updates() {
		return this.props.updates.map(function (update, index) {
			return React.createElement(
				'li',
				{ className: "update " + update.platform, key: index },
				update.status
			);
		});
	}
	render() {
		return React.createElement(
			'div',
			{ className: 'updates' },
			React.createElement(
				'ul',
				null,
				this.updates()
			)
		);
	}
}

class Card extends React.Component {
	render() {
		return React.createElement(
			'div',
			{ className: 'card' },
			React.createElement(Photo, { image: person.photo }),
			React.createElement(Bio, {
				name: person.name,
				location: person.location,
				occupation: person.occupation
			}),
			React.createElement(Updates, { updates: person.updates })
		);
	}
}

ReactDOM.render(React.createElement(Card, null), document.getElementById('app'));