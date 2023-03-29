import './style.css';

const todoListsContainer = document.querySelector('.container-todo-lists');

// localStorage initialize
let tasks = JSON.parse(localStorage.getItem('TODOS')) || [];

const addTodoForm = document.getElementById('form-add-todo');
const newTodo = document.getElementById('new-todo');

// create new todo
const createTodo = description => {
  const newTodo = {
    index: tasks.length + 1,
    description,
    isCompleted: false,
  };
  tasks.push(newTask);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// delete a todo
const deleteTodo = (index) => {
  tasks = tasks.filter((todo, ref) => ref !== +index);
  tasks = tasks.map((task, index) => ({ ...task, index: index+1 }));
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// update a todo
const updateTodo = (index, newDescription) => {
  tasks[index].description = newDescription;
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

const generateTodos = () => {
  
}















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

// remove todo
todoListsContainer.addEventListener('click', (event1) => {
  event1.preventDefault();
  const todoIndex1 = event1.target.dataset.index;
  console.log(todoIndex1)

  if (event1.target.matches('.todo-options')) {
    event1.target.classList = 'delete-option';

    todoListsContainer.addEventListener('click', (event2) => {

      const todoIndex2 = event2.target.dataset.index;
      console.log(`second clicked: ${todoIndex2}`)

      event2.preventDefault();
      if (event2.target.dataset.index !== event1.target.dataset.index) {
        event1.target.classList = 'todo-options';
        event2.target.classList = 'delete-option';
      } else if (event2.target.dataset.index === event1.target.dataset.index) {
        if (event2.target.matches('.delete-option')) {
          event1.target.classList = 'todo-options';
          TodoCRUD.deleteTodo(todoIndex2);
          Interface.renderTodos();
        }
      }
    });
  }
});


