var person = {
	name: 'Manuel Valles',
	location: 'London, UK',
	occupation: {
		title: 'FrontEnd Developer',
		employer: 'A lucky person/company'
	},
	photo: './img/rubikicon.jpg',
	updates: [{
		platform: 'twitter',
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
			React.createElement('img', { src: 'img/rubikicon.jpg', alt: 'RubikIcon' })
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
				'Manu.name'
			),
			React.createElement(
				'h2',
				{ className: 'location' },
				'London, UK'
			),
			React.createElement(
				'div',
				{ className: 'occupation' },
				React.createElement(
					'p',
					null,
					'Looking for a FrontEnd Developer job'
				)
			)
		);
	}
}

class Updates extends React.Component {
	render() {
		return React.createElement(
			'div',
			{ className: 'updates' },
			React.createElement(
				'ul',
				null,
				React.createElement(
					'li',
					{ className: 'update' },
					'updates'
				),
				React.createElement(
					'li',
					{ className: 'update' },
					'updates'
				)
			)
		);
	}
}

class Card extends React.Component {
	render() {
		return React.createElement(
			'div',
			{ className: 'card' },
			React.createElement(Photo, null),
			React.createElement(Bio, null),
			React.createElement(Updates, null)
		);
	}
}

ReactDOM.render(React.createElement(Card, null), document.getElementById('app'));