import { TodoCRUD } from "./todoCrud.js";

const Interface = {
  renderTodos: () => {
    const todoListsContainer = document.querySelector('.container-todo-lists');
    const tasks = TodoCRUD.readTodos();
    todoListsContainer.innerHTML = tasks.map((todo, index) =>  ` 
                            <div class="wrap-todo-list" todo-wrap="${index + 1}">
                              <div class="todo-list" todo-index="${index + 1}">
                                <input type="checkbox" class="todo-checkbox" id="todo-${index + 1}" name="todo-${index + 1}">
                                <label for="todo-${index + 1}" class="todo-description" desc-index="${index + 1}">${todo.description}</label>
                                <a class="a-todo-options">
                                  <img src="../icons/dots1.png" class="todo-options" data-index="${index}">
                                </a>
                              </div>
                              <hr>
                            </div>
                          `).join('');
  },
};

export default Interface;