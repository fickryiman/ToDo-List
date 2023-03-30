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
      let temporaryStorage = {};
      temporaryStorage.index = task.index;
      temporaryStorage.description = task.description;
      temporaryStorage.completed = (i === index-1) ? !task.completed : task.completed;
      return temporaryStorage;
    });
    localStorage.setItem('TODOS', JSON.stringify(tasks));
    // next what?
  },
  updateTodoDescription: (val) => {
    let tasks = TodoCRUD.readTodos();
    
    tasks = tasks.map((task, i) => { 
      let temporaryStorage = {};
      temporaryStorage.index = task.index;
      temporaryStorage.description = task.description;
      temporaryStorage.completed = task.completed;
      return temporaryStorage;
    });
    localStorage.setItem('TODOS', JSON.stringify(tasks));
  },
  deleteTodo: (index) => {
    let tasks = TodoCRUD.readTodos();
    tasks = tasks.filter((todo, ref) => ref !== +index);
    tasks = tasks.map((task, index) => ({ ...task, index: index + 1 }));
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
    todoListsContainer.innerHTML = tasks.map((todo, index) => (todo.completed) ? ` 
                            <div class="wrap-todo-list"">
                              <div class="todo-list"">
                                <input type="checkbox" class="todo-checkbox" id="todo-${index + 1}" name="todo-${index + 1}" checked>
                                <input for="todo-${index + 1}" class="todo-description-false" desc-index="${index + 1}" value="${todo.description}" onchange="changeDesc(this.value)"></input>
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
                                <input for="todo-${index + 1}" class="todo-description" desc-index="${index + 1}" value="${todo.description}" onchange="changeDesc(this.value)"></input>
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
  
  // update by clicking the checkbox
  if (event.target.matches('.todo-checkbox')) {
    event.target.checked = event.target.checked;
    if (event.target.checked) {
      event.target.nextElementSibling.classList = 'todo-description-false';
    } else {
      event.target.nextElementSibling.classList = 'todo-description';
    }
    TodoCRUD.updateTodoCompletion(event.target.id.slice(-1));
  }
  
  // remove or update by clicking three dots
  if (event.target.matches('.todo-options')) {
    console.log(event)
    const todoIndex = event.target.dataset.index;
    event.target.classList = 'delete-option';
    event.target.parentElement.parentElement.classList = 'todo-list-add-delete';
    event.target.parentElement.previousElementSibling.classList = 'todo-description-edit';
    
    if (event.target.parentElement.previousElementSibling.matches('.todo-description-edit')) {
      
    };
    // console.log(event.target.className);
    // console.log(todoIndex1 !== index)

    todoListsContainer.addEventListener('click', (event2) => {

      const todoIndex2 = event2.target.dataset.index;

      if (event2.target.matches('.delete-option')) {
        if (event.target.dataset.index !== todoIndex2) {
          event.target.classList = 'todo-options';
          event.target.parentElement.parentElement.classList = 'todo-list';
          event.target.parentElement.previousElementSibling.classList = 'todo-description';
        }
      }
      
    });
  };

  

  
});


