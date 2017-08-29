class Pomodoro extends React.Component{
	totalTime(timeOne, timeTwo){
		return timeOne + timeTwo;
	}
	render(){
		return(
			<div>This timer runs from {this.props.workingTime} minutes, 
			followed by rest of {this.props.restingTime} minutes. 
			<br/>For a total time of {this.totalTime(this.props.workingTime, this.props.restingTime)} minutes.
			<br/>There are {} seconds elapsed.</div>

		)
	}
}

ReactDOM.render(<Pomodoro workingTime={20} restingTime={5}/>, document.getElementById('app'));