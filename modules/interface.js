import TodoCRUD from './crud.js';

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

export default Interface;
