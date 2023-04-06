let { todos, TodoCD } = require('./addDeleteTodo.js');
// const { TodoCD } = require('./addDeleteTodo.js');

// let todos = [
//   {"index":1, "description":"setup project with webpack", "completed":false},
//   {"index":2, "description":"add linter configs", "completed":false},
//   {"index":3, "description":"project 1: list structure", "completed":false},
//   {"index":4, "description":"project 2: add and remove items", "completed":false},
//   {"index":5, "description":"project 3: interactive list", "completed":false},
//   {"index":6, "description":"help friend's to solve their issues", "completed":false},
//   {"index":7, "description":"take a rest", "completed":false},
//   {"index":8, "description":"sleep", "completed":false}
// ];

const TodoRU = {
  updateTodoDescription: (index, newDesc) => {
    todos = todos.map((task, i) => {
      task.index = task.index;
      task.description = (i === index - 1) ? newDesc : task.description;
      task.isCompleted = task.isCompleted;
      return todos;
    });
  },
  updateTodoCompletion: (index) => {
    todos = todos.map((task, i) => {
      task.index = task.index;
      task.description = task.description;
      task.isCompleted = (i === index - 1) ? !task.isCompleted : task.isCompleted;
      return todos;
    });
  },
  deleteCompletedTodo: () => {
    todos = todos.filter((todo) => !todo.isCompleted);
    return todos.length;
  },
};

module.exports = TodoRU;
