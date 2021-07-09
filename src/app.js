console.log('App.js is running!');

var app = {
	title: 'Indecision App',
	subtitle: 'An app for makign decisions!'
}

// JSX - JavaScript XML
var template = (
	<div>
		<h1>{app.title}</h1>
		<p>{app.subtitle}</p>
		<ol>
			<li>Item one</li>
			<li>Item two</li>
		</ol>
	</div>
);

var user = {
	name: 'Andy',
	age: 36,
	location: 'Knutsford'
}

var userName = 'Andy';
var userAge = 35;
var userLocation = 'Knutsford';
var templateTwo = (
	<div>
		<h1>{user.name}</h1>
		<p>Age: {user.age}</p>
		<p>Location: {user.location}</p>
	</div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);