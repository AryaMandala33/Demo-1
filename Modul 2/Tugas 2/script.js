const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="task-text">${todoText}</span>
            <button onclick="editTodo(this)">Edit</button>
            <button onclick="deleteTodo(this)">Delete</button>
        `;
        todoList.appendChild(li);
        todoInput.value = '';
    }
}

function editTodo(button) {
    const li = button.parentElement;
    const taskText = li.querySelector('.task-text');
    const newText = prompt('Edit your task:', taskText.textContent);
    if (newText) {
        taskText.textContent = newText;
    }
}

function deleteTodo(button) {
    const li = button.parentElement;
    li.remove();
}