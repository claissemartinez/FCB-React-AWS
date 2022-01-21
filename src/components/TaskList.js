import { useState } from "react";
import Task from "./Tasks";

function TaskList(){

	// const tasksItemsList = [
	// 	"Follow Edukasyon.ph on Facebook.",
	// 	"Follow AWS Siklab PH on Facebook.",
	// 	"Follow Zuitt Coding Bootcamp on Facebook.",
	// 	"Follow Claisse Martinez on Facebook."

	// ]; //index

	const [taskItemsList, setTaskItemsList] = useState([
		"Follow Edukasyon.ph on Facebook.",
		"Follow AWS Siklab PH on Facebook.",
		"Follow Zuitt Coding Bootcamp on Facebook.",
		"Follow Claisse Martinez on Facebook."

	]);


	const [taskValue, setTaskValue] = useState(""); //usestate resets value
	console.log("taskValue: ", taskValue);

	const inputChangeHandler = (e) => {
		setTaskValue(e.target.value)
	};

	const addTaskHandler = () => {
		setTaskItemsList([taskValue, ...taskItemsList]);
		setTaskValue("");
	};

	return(
		<div>
		{/* <input onChange={(e) =>console.log(e.target.value)} className="task-input" placeholder="Create a new task" /> */}
		{/* <input onChange={(e) =>setTaskValue(e.target.value)} className="task-input" placeholder="Create a new task" /> */}

		<input onChange={inputChangeHandler} className="task-input" placeholder="Create a new task" onBlur={addTaskHandler} value={taskValue} />
			<ul>
					{taskItemsList.map((task, index)=> {
							console.log(task, index);
							return <Task key={index} taskName={task} />
						})}
			</ul>
			</div>
		);
}

export default TaskList;