import Task from "./Tasks";

function TaskList(){

	const tasksItemsList = [
		"Follow Edukasyon.ph on Facebook.",
		"Follow AWS Siklab PH on Facebook.",
		"Follow Zuitt Coding Bootcamp on Facebook.",
		"Follow Claisse Martinez on Facebook."

	]; //index


	return(
		<div>
		<input className="task-input" />
			<ul>
					{tasksItemsList.map((task, index)=> {
							console.log(task, index);
							return <Task key={index} taskName={task} />
						})}
			</ul>
			</div>
		);
}

export default TaskList;