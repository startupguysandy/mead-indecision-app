'use strict';

console.log('App.js is running!');

var app = {
	title: 'Indecision App',
	subtitle: 'An app for makign decisions!',
	options: ['One', 'Two']

	// JSX - JavaScript XML
};var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		app.title
	),
	app.subtitle && React.createElement(
		'p',
		null,
		app.subtitle
	),
	React.createElement(
		'p',
		null,
		app.options.length > 0 ? 'Here are your options' : 'No options'
	),
	React.createElement(
		'ol',
		null,
		React.createElement(
			'li',
			null,
			'Item one'
		),
		React.createElement(
			'li',
			null,
			'Item two'
		)
	)
);

var count = 0;
var addOne = function addOne() {
	console.log('addOne');
};
var minusOne = function minusOne() {
	console.log('minusOne');
};
var reset = function reset() {
	console.log('reset');
};

var templateTwo = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		'Count: ',
		count
	),
	React.createElement(
		'button',
		{ onClick: addOne },
		'+1'
	),
	React.createElement(
		'button',
		{ onClick: minusOne },
		'-1'
	),
	React.createElement(
		'button',
		{ onClick: reset },
		'reset'
	)
);

console.log(templateTwo);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
