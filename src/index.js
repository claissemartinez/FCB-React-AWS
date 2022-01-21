import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// My first component

//function HelloWorld() {

//  return <h1>Hello, world!</h1>; // JSX elements -->h1 

//}

//function Task(){
//	return(
//			<li className="tasks-item">Follow Edukasyon.ph on Facebook </li>
//		);
//}

function Task(props){
	console.log(props);
	return(
			<li className="tasks-item">{props.taskName}</li>
		);
}




function TaskList(){

	const tasksItemsList = [
		"Follow Edukasyon.ph on Facebook.",
		"Follow AWS Siklab PH on Facebook.",
		"Follow Zuitt Coding Bootcamp on Facebook.",
		"Follow Claisse Martinez on Facebook."

	]; //index


	return(
			<ul>

					{tasksItemsList.map((task, index)=> {
							console.log(task, index);
							return <Task key={index} taskName={task} />
						})}
			</ul>
		);
}




function App(){

	const paraStyle ={
			"marginBottom": "20px" 

			
	}; 
	//most of the time, anything in between in curly braces is object. no semicolon, using javascript object to represent css & it will be cammelCase

	return (
		<div className="app">
			<header className="app-header">
				<h1>My Amazing To-Do List App</h1>
				<p style={paraStyle}> The most simple and amazing To Do-list React app. </p> 

				<TaskList />
			</header>
		</div> //no longer HTML Mark up, this is JSX. Not reccommended to use pure bootstrap, use react-bootstrap.

		);
}


ReactDOM.render(<App />, document.getElementById("root"));

//ReactDOM.render(<HelloWorld></HelloWorld>, document.getElementById("root")); //from div root
//ReactDOM.render(<HelloWorld />,document.getElementById("root"));