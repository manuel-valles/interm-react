class Pomodoro extends React.Component {
	constructor() {
		super();
		this.state = {
			timeElapsed: 0
		};
	}
	totalTime(timeOne, timeTwo) {
		return timeOne + timeTwo;
	}
	formatTime(minutes, seconds) {
		minutes = minutes > 9 ? minutes : "0" + minutes;
		seconds = seconds > 9 ? seconds : "0" + seconds;
		return minutes + ":" + seconds;
	}
	componentDidMount() {
		this.interval = setInterval(this.elapseTime.bind(this), 1000);
		this.setState({
			start: new Date(),
			timeElapsed: this.formatTime(this.props.workingTime, this.props.workingTime * 60 % 60)
		});
	}
	componentWillUnmount() {
		clearInterval(this.interval);
	}
	elapseTime() {
		//how much time has elapsed?
		//var timeElapsed = CURRENT TIME - START TIME
		let timeElapsed = Math.floor((new Date() - this.state.start) / 1000);
		// countDown
		let countDown = this.props.workingTime * 60 - timeElapsed;
		let minDown = Math.floor(countDown / 60);
		let secDown = countDown % 60;
		countDown = this.formatTime(minDown, secDown);
		this.setState({ timeElapsed: countDown });
		// If timeElapsed >= 25 minutes -> then alert!!
		if (this.state.timeElapsed == "00:00") {
			clearInterval(this.interval);
			alert("Time for a break!");
		}
	}
	render() {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"h1",
				null,
				"Pomodoro Timer"
			),
			React.createElement(
				"div",
				{ className: "setTimer" },
				React.createElement(
					"h2",
					null,
					"Session: ",
					React.createElement(
						"span",
						null,
						this.props.workingTime
					)
				),
				React.createElement(
					"h2",
					null,
					"Break: ",
					React.createElement(
						"span",
						null,
						this.props.restingTime
					)
				)
			),
			React.createElement(
				"div",
				{ className: "session" },
				React.createElement(
					"h2",
					null,
					"Session"
				),
				React.createElement("hr", null),
				React.createElement(
					"p",
					null,
					this.state.timeElapsed
				)
			)
		);
	}
}

ReactDOM.render(React.createElement(Pomodoro, { workingTime: 25, restingTime: 5 }), document.getElementById('app'));