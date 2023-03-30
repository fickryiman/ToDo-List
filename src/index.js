import './style.css';

const Todo = (index, description, completed) => ({
  index, description, completed,
});

const TodoCRUD = {
  readTodos: () => {
    const tasks = localStorage.getItem('TODOS') === null ? [] : JSON.parse(localStorage.getItem('TODOS'));
    return tasks;
  },
  createTodo: (todo) => {
    const tasks = TodoCRUD.readTodos();
    tasks.push(todo);
    localStorage.setItem('TODOS', JSON.stringify(tasks));
  },
  updateTodoCompletion: (index) => {
    let tasks = TodoCRUD.readTodos();

    tasks = tasks.map((task, i) => {
      const temporaryStorage = {};
      temporaryStorage.index = task.index;
      temporaryStorage.description = task.description;
      temporaryStorage.completed = (i === index - 1) ? !task.completed : task.completed;
      return temporaryStorage;
    });
    localStorage.setItem('TODOS', JSON.stringify(tasks));
  },
  updateTodoDescription: (index, event) => {
    let tasks = TodoCRUD.readTodos();

    tasks = tasks.map((task, i) => {
      const temporaryStorage = {};
      temporaryStorage.index = task.index;
      temporaryStorage.description = (i === index - 1) ? event.target.value : task.description;
      temporaryStorage.completed = task.completed;
      return temporaryStorage;
    });
    localStorage.setItem('TODOS', JSON.stringify(tasks));
  },
  deleteTodo: (index) => {
    let tasks = TodoCRUD.readTodos();
    tasks = tasks.filter((todo, ref) => ref !== +index);
    tasks = tasks.map((task, index) => ({ ...task, index: index + 1 }));

    localStorage.setItem('TODOS', JSON.stringify(tasks));
  },
  deleteCompletedTodo: () => {
    let tasks = TodoCRUD.readTodos();
    tasks = tasks.filter((todo) => !todo.completed);

    localStorage.setItem('TODOS', JSON.stringify(tasks));
  }
};

const Interface = {
  renderTodos: () => {
    const todoListsContainer = document.querySelector('.container-todo-lists');
    const tasks = TodoCRUD.readTodos();
    todoListsContainer.innerHTML = tasks.map((todo, index) => ((todo.completed) ? ` 
                            <div class="wrap-todo-list"">
                              <div class="todo-list"">
                                <input type="checkbox" class="todo-checkbox" id="todo-${index + 1}" name="todo-${index + 1}" checked>
                                <input id="todo-desc-${index + 1}" class="todo-description-false" desc-index="${index + 1}" value="${todo.description}"></input>
                                <a class="a-todo-options">
                                  <img src="../icons/dots1.png" class="todo-options" data-index="${index}">
                                </a>
                              </div>
                              <hr>
                            </div>
                          ` : `
                            <div class="wrap-todo-list"">
                              <div class="todo-list"">
                                <input type="checkbox" class="todo-checkbox" id="todo-${index + 1}" name="todo-${index + 1}">
                                <input id="todo-desc-${index + 1}" class="todo-description" desc-index="${index + 1}" value="${todo.description}"></input>
                                <a class="a-todo-options">
                                  <img src="../icons/dots1.png" class="todo-options" data-index="${index}">
                                </a>
                              </div>
                              <hr>
                            </div>
                          `)).join('');
  },
};

document.addEventListener('DOMContentLoaded', Interface.renderTodos);

const addTodoForm = document.getElementById('form-add-todo');
const newTodo = document.getElementById('new-todo');
const todoListsContainer = document.querySelector('.container-todo-lists');

// create new todo
addTodoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const index = localStorage.getItem('TODOS') === null ? 1 : JSON.parse(localStorage.getItem('TODOS')).length + 1;
  const description = newTodo.value;
  const isCompleted = false;
  const todo = Todo(index, description, isCompleted);

  if (description) {
    TodoCRUD.createTodo(todo);
    Interface.renderTodos();
    addTodoForm.reset();
  }
});

// update or remove todo
todoListsContainer.addEventListener('click', (event) => {
  // update completion status by clicking the checkbox
  if (event.target.matches('.todo-checkbox')) {
    if (event.target.checked) {
      event.target.nextElementSibling.classList = 'todo-description-false';
    } else {
      event.target.nextElementSibling.classList = 'todo-description';
    }
    TodoCRUD.updateTodoCompletion(event.target.id.slice(-1));
    Interface.renderTodos();
  }

  // remove or update by clicking three dots first
  if (event.target.matches('.todo-options')) {
    event.target.classList = 'delete-option';
    event.target.parentElement.parentElement.classList = 'todo-list-add-delete';
    event.target.parentElement.previousElementSibling.classList = 'todo-description-edit';

    todoListsContainer.addEventListener('click', (event2) => {
      // update todo description
      if (event2.target.matches('.todo-description-edit')) {
        const index = event2.target.id.slice(-1);

        document.getElementById(`todo-desc-${index}`).addEventListener('change', () => {
          TodoCRUD.updateTodoDescription(index, event2);
          Interface.renderTodos();
        });
      }

      // remove todo
      if (event2.target.matches('.delete-option')) {
        const index2 = event2.target.dataset.index;

        if (event.target.dataset.index !== event2.target.dataset.index) {
          event.target.classList = 'todo-options';
          event.target.parentElement.parentElement.classList = 'todo-list';
          event.target.parentElement.previousElementSibling.classList = 'todo-description';
        } else {
          TodoCRUD.deleteTodo(index2);
          window.location.reload();
          Interface.renderTodos();
        }
      }
    });
  }
});

// clear all completed (true) todo
document.querySelector('.a-clear-all-completed').addEventListener('click', () => {
  TodoCRUD.deleteCompletedTodo();
  Interface.renderTodos();
})
