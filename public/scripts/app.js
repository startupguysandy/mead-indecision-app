console.log('App.js is running!');

// JSX - JavaScript XML
// var template = <p>This is JSX from app.js!</p>;
var template = /*#__PURE__*/React.createElement("p", null, "This is JSX from app.js!");
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);