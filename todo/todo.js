
const input = document.getElementById('todoInput');
const list = document.getElementById('todoList');


let tasks = JSON.parse(localStorage.getItem('tasks')) || [];


function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


function showTasks() {
    list.innerHTML = '';
    tasks.forEach((task, i) => {
        const li = document.createElement('li');
        li.className = 'todo-item';
        if (task.done) li.classList.add('completed');
        
        li.innerHTML = `
            <input type="checkbox" class="checkbox" ${task.done ? 'checked' : ''} 
                onclick="toggleTask(${i})">
            <span>${task.text}</span>
            <button class="delete-btn" onclick="removeTask(${i})">Delete</button>
        `;
        
        list.appendChild(li);
    });
}

// Add new task
function addTodo() {
    const text = input.value.trim();
    if (text) {
        tasks.push({
            text: text,
            done: false
        });
        saveTasks();
        showTasks();
        input.value = '';
    }
}

function toggleTask(index) {
    tasks[index].done = !tasks[index].done;
    saveTasks();
    showTasks();
}

// Remove task
function removeTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    showTasks();
}

// Add task when Enter key is pressed
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodo();
    }
});

showTasks();

