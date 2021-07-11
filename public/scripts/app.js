'use strict';

console.log('Build it visible is running!');

var app = {
	title: 'Visibility Toggle',
	textVisible: false
};

var toggleVisibility = function toggleVisibility() {
	app.textVisible = !app.textVisible;
	render();
};

var appRoot = document.getElementById('app');
var textElement = document.getElementById('text-info');

var render = function render() {
	var template = React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			app.title
		),
		React.createElement(
			'button',
			{ onClick: toggleVisibility },
			app.textVisible ? 'Hide details' : 'Show details'
		),
		app.textVisible && React.createElement(
			'p',
			{ id: 'text-info' },
			'Hey. These are some details you can now see!'
		)
	);

	ReactDOM.render(template, appRoot);
};

render();
