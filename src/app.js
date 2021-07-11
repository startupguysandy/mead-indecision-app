console.log('App.js is running!');

let app = {
	title: 'Indecision App',
	subtitle: 'An app for makign decisions!',
	options: []
}

const onFormSubmit = (e) => {
	e.preventDefault();

	const option = e.target.elements.option.value;

	if (option) {
		app.options.push(option);
		e.target.elements.option.value = '';
		renderApp();
	}
};

const onRemoveAll = () => {
	app.options = [];
	renderApp();
};

const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];

const renderApp = () => {
	const template = (
		<div>
			<h1>{app.title}</h1>
			{app.subtitle && <p>{app.subtitle}</p>}
			<p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
			<p>{app.options.length}</p>
			<button onClick={onRemoveAll}>Remove All</button>
			<ol>
				{
					app.options.map((option) => {
						return <li key={option}>{option}</li>;
					})
				}
			</ol>
			<form onSubmit={onFormSubmit}>
				<input type="text" name="option" />
				<button>Add Option</button>
			</form>
		</div>
	);

	ReactDOM.render(template, appRoot);
};

renderApp();