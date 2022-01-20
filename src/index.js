import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// My first component

//function HelloWorld() {

//  return <h1>Hello, world!</h1>; // JSX elements -->h1 

//}

function App(){
	return (
		<div className="app">
			<header className="app-header">
				<h1>My Amazing To-Do List App</h1>
				<p> The most simple and amazing todo-list React app. </p>
			</header>
		</div> //no longer HTML Mark up, this is JSX. Not reccommended to use pure bootstrap, use react-bootstrap.

		);
}


ReactDOM.render(<App />, document.getElementById("root"));

//ReactDOM.render(<HelloWorld></HelloWorld>, document.getElementById("root")); //from div root
//ReactDOM.render(<HelloWorld />,document.getElementById("root"));