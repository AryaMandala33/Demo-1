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
    
    if (button.textContent === 'Edit') {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = taskText.textContent;
        li.insertBefore(input, taskText);
        li.removeChild(taskText);
        button.textContent = 'Save';
    } else {
        const input = li.querySelector('input');
        const newText = input.value.trim();
        
        if (newText) {
            const span = document.createElement('span');
            span.classList.add('task-text');
            span.textContent = newText;
            li.insertBefore(span, input);
            li.removeChild(input);
        }
        
        button.textContent = 'Edit';
    }
}

function deleteTodo(button) {
    const li = button.parentElement;
    li.remove();
}
