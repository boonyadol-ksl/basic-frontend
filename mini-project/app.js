const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');
const remainingCount = document.getElementById('remaining-count');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

function saveToStorage() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function updateRemaining() {
  const remaining = todos.filter(todo => !todo.completed).length;
  remainingCount.textContent = remaining;
}

function renderTodos() {
  list.innerHTML = '';
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.className = 'todo-item';
    if (todo.completed) li.classList.add('completed');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.onchange = () => {
      todos[index].completed = !todos[index].completed;
      saveToStorage();
      renderTodos();
    };

    const span = document.createElement('span');
    span.textContent = todo.text;

    const delBtn = document.createElement('button');
    delBtn.textContent = '✕';
    delBtn.onclick = () => {
      todos.splice(index, 1);
      saveToStorage();
      renderTodos();
    };

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);
    list.appendChild(li);
  });

  updateRemaining();
}

addBtn.onclick = () => {
  const text = input.value.trim();
  if (text) {
    todos.push({ text, completed: false });
    input.value = '';
    saveToStorage();
    renderTodos();
  }
};

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addBtn.click();
});

renderTodos();
