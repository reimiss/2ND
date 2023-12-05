function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);
    event.target.appendChild(draggedElement);
}

function addTask() {
    var todoList = document.getElementById('todo');
    var newTask = document.createElement('div');
    newTask.className = 'task';
    newTask.draggable = true;
    newTask.setAttribute('ondragstart', 'drag(event)');
    newTask.setAttribute('contenteditable', 'true');
    newTask.innerText = 'Nauja užduotis';

    todoList.insertBefore(newTask, todoList.lastChild);
}

function removeTask(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);
    draggedElement.remove();
}
