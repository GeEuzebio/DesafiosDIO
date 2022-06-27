const form = document.getElementById('task-form');
const taskList = document.getElementById('tasks');

form.onsubmit = function (e) {
	e.preventDefault();
	const inputField = document.getElementById('task-input');
	addTask(inputField.value);
	form.reset();
};

function addTask() {
	
	var taskInput = document.getElementById('task-input');
	var taskInputValue = taskInput.value;
	const taskContainer = document.createElement('div');
	const newTask = document.createElement('input');
	const taskLabel = document.createElement('label');
	const taskDescriptionNode = document.createTextNode(taskInputValue);

	newTask.setAttribute('type', 'checkbox');
	newTask.setAttribute('name', taskInputValue);
	newTask.setAttribute('id', taskInputValue);

	taskLabel.setAttribute('for', taskInputValue);
	taskLabel.appendChild(taskDescriptionNode);

	taskContainer.classList.add('task-item');
	taskContainer.appendChild(newTask);
	taskContainer.appendChild(taskLabel);

	taskList.appendChild(taskContainer);
}

var taskInput = document.getElementsByTagName('task-input');

button.addEventListener('click', addTask);