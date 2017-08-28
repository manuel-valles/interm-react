'use strict';

function tick() {
	var element = React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			'Hello World!!'
		),
		React.createElement(
			'h2',
			null,
			'It is ',
			new Date().toLocaleTimeString(),
			'.'
		)
	);
	ReactDOM.render(element, document.getElementById('root'));
}
setInterval(tick, 1000);