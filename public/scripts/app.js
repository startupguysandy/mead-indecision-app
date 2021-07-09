'use strict';

console.log('App.js is running!');

var app = {
	title: 'Indecision App',
	subtitle: 'An app for makign decisions!'

	// JSX - JavaScript XML
};var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		app.title
	),
	React.createElement(
		'p',
		null,
		app.subtitle
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

var user = {
	name: 'Andy',
	age: 36,
	location: 'Knutsford'
};

var userName = 'Andy';
var userAge = 35;
var userLocation = 'Knutsford';
var templateTwo = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		user.name
	),
	React.createElement(
		'p',
		null,
		'Age: ',
		user.age
	),
	React.createElement(
		'p',
		null,
		'Location: ',
		user.location
	)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
