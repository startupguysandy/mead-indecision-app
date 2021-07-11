console.log('Build it visible is running!');

let app = {
	title: 'Visibility Toggle',
	textVisible: false
}

const toggleVisibility = () => {
	app.textVisible = !app.textVisible;
	render();
};

const appRoot = document.getElementById('app');
const textElement = document.getElementById('text-info');

const render = () => {
	const template = (
		<div>
			<h1>{app.title}</h1>
			<button onClick={toggleVisibility}>{app.textVisible ? 'Hide details' : 'Show details'}</button>
			{app.textVisible && <p id="text-info" >Hey. These are some details you can now see!</p>}
		</div>
	);
	
	ReactDOM.render(template, appRoot);
};

render();