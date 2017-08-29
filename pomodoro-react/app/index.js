class Pomodoro extends React.Component{
	constructor(){
		super();
		this.state={
			timeElapsed: 0
		};
	}
	totalTime(timeOne, timeTwo){
		return timeOne + timeTwo;
	}
	formatTime(minutes, seconds){
		minutes = minutes>9?minutes:"0"+minutes;
		seconds = seconds>9?seconds:"0"+seconds;
		return minutes+":"+seconds;
	}
	componentDidMount(){
		this.interval = setInterval(this.elapseTime.bind(this),1000);
		this.setState({
			start: new Date(),
			timeElapsed: this.formatTime(this.props.workingTime, this.props.workingTime*60%60)
		});
	}
	componentWillUnmount(){
		clearInterval(this.interval);
	}
	elapseTime(){
		//how much time has elapsed?
		//var timeElapsed = CURRENT TIME - START TIME
		let timeElapsed = Math.floor((new Date() - this.state.start) / 1000);
		// countDown
		let countDown = this.props.workingTime*60 - timeElapsed;
		let minDown = Math.floor(countDown/60);
		let secDown = countDown%60;
		countDown = this.formatTime(minDown, secDown);
		this.setState({timeElapsed: countDown});
		// If timeElapsed >= 25 minutes -> then alert!!
		if(this.state.timeElapsed == "00:00"){
			clearInterval(this.interval);
			alert("Time for a break!");
		}
	}
	render(){
		return(
			<div>
				<h1>Pomodoro Timer</h1>
				<div className="setTimer">
					<h2>Session: <span>{this.props.workingTime}</span>
					</h2>
					<h2>Break: <span>{this.props.restingTime}</span></h2>
				</div>
				<div className="session">
					<h2>Session</h2>
					<hr/>
					<p>{this.state.timeElapsed}</p>
				</div>
			</div>
		)
	}
}

ReactDOM.render(<Pomodoro workingTime={25} restingTime={5}/>, document.getElementById('app'));