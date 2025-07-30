// Select elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

// Add task function
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }
  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const span = document.createElement('span');
  span.className = 'task-text';
  span.textContent = taskText;

  const delBtn = document.createElement('button');
  delBtn.textContent = 'Delete';
  delBtn.className = 'delete-btn';

  // Mark completed
  checkbox.addEventListener('change', function() {
    li.classList.toggle('completed', this.checked);
  });

  // Delete task
  delBtn.addEventListener('click', function() {
    todoList.removeChild(li);
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(delBtn);

  todoList.appendChild(li);
  taskInput.value = '';
  taskInput.focus();
}

// Add with button
addBtn.addEventListener('click', addTask);

// Add with Enter key
taskInput.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    addTask();
  }
});
