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
  updateTodo: (index) => {
    let tasks = TodoCRUD.readTodos();
    // next what?
  },
  deleteTodo: (index) => {
    let tasks = TodoCRUD.readTodos();
    tasks = tasks.filter((todo, ref) => ref !== +index);
    tasks = tasks.map((task, index) => ({ ...task, index: index + 1 }))
    // const indexing = tasks.map(todo => {
    //   const temporaryStorage = {};
    //   temporaryStorage.index = todo.index > index ? todo.index - 1 : todo.index;
    //   temporaryStorage.description = todo.description;
    //   temporaryStorage.completed = todo.completed;
    //   return temporaryStorage;
    // });
    
    localStorage.setItem('TODOS', JSON.stringify(tasks));
  }
};

const Interface = {
  renderTodos: () => {
    const todoListsContainer = document.querySelector('.container-todo-lists');
    const tasks = TodoCRUD.readTodos();
    todoListsContainer.innerHTML = tasks.map((todo, index) =>  ` 
                            <div class="wrap-todo-list"">
                              <div class="todo-list"">
                                <input type="checkbox" class="todo-checkbox" id="todo-${index + 1}" name="todo-${index + 1}">
                                <input for="todo-${index + 1}" class="todo-description" desc-index="${index + 1}" value="${todo.description}"></input>
                                <a class="a-todo-options">
                                  <img src="../icons/dots1.png" class="todo-options" data-index="${index}">
                                </a>
                              </div>
                              <hr>
                            </div>
                          `).join('');
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
  // event.preventDefault();
  // const index = event.target.dataset.index;
  // console.log(`first clicked: ${todoIndex1}`)
  console.log(event)
  // console.log(event.target.onclick)
  // console.log(event1.type)

  if (event.target.matches('.todo-checkbox')) {
    event.target.checked = event.target.checked;
    if (event.target.checked) {
      event.target.nextElementSibling.classList = 'todo-description-status';
    } else {
      event.target.nextElementSibling.classList = 'todo-description';
    }
    console.log(event.target.checked)
  }
  
  if (event.target.matches('.todo-options')) {
    const todoIndex1 = event.target.dataset.index;
    event.target.classList = 'delete-option';
    event.target.parentElement.parentElement.classList = 'todo-list-add-delete';
    event.target.parentElement.previousElementSibling.classList = 'todo-description-edit';
    
    
    // console.log(event.target.className);
    // console.log(todoIndex1 !== index)

    todoListsContainer.addEventListener('click', (event2) => {
      event2.preventDefault();

      const todoIndex2 = event2.target.dataset.index;

      if (event2.target.matches('.delete-option')) {
        if (event.target.dataset.index !== todoIndex2) {
          event.target.classList = 'todo-options';
          event.target.parentElement.parentElement.classList = 'todo-list';
          event.target.parentElement.previousElementSibling.classList = 'todo-description';
        }
      }
      
    });
  }

  
});


