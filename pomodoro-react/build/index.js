class Pomodoro extends React.Component {
	totalTime(timeOne, timeTwo) {
		return timeOne + timeTwo;
	}
	render() {
		return React.createElement(
			'div',
			null,
			'This timer runs from ',
			this.props.workingTime,
			' minutes, followed by rest of ',
			this.props.restingTime,
			' minutes.',
			React.createElement('br', null),
			'For a total time of ',
			this.totalTime(this.props.workingTime, this.props.restingTime),
			' minutes.',
			React.createElement('br', null),
			'There are ',
			' seconds elapsed.'
		);
	}
}

ReactDOM.render(React.createElement(Pomodoro, { workingTime: 20, restingTime: 5 }), document.getElementById('app'));