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
	componentDidMount(){
		this.interval = setInterval(this.elapseTime.bind(this),1000);
		this.setState({start: new Date()});
	}
	componentWillUnmount(){
		clearInterval(this.interval);
	}
	elapseTime(){
		//how much time has elapsed?
		//var timeElapsed = CURRENT TIME - START TIME
		var timeElapsed = Math.floor((new Date() - this.state.start) / 1000);
		this.setState({timeElapsed: timeElapsed});
		// If timeElapsed >= 25 minutes -> then alert!!
		if(this.state.timeElapsed >= this.props.workingTime*60){
			clearInterval(this.interval);
			alert("Time for a break!");
		}
	}
	render(){
		return(
			<div>This timer runs from {this.props.workingTime} minutes, 
			followed by rest of {this.props.restingTime} minutes. 
			<br/>For a total time of {this.totalTime(this.props.workingTime, this.props.restingTime)} minutes.
			<br/>There are {this.state.timeElapsed} seconds elapsed.</div>
		)
	}
}

ReactDOM.render(<Pomodoro workingTime={1} restingTime={1}/>, document.getElementById('app'));