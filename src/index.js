import './style.css';
import TodoCRUD from '../modules/crud.js';
import Interface from '../modules/interface.js';
import Todo from '../modules/todo.js';

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
});
