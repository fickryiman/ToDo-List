let todos = [];

const TodoCRUD = {

  readTodos: () => todos,
  createTodo: (desc) => {
    todos.push({
      index: todos.length + 1,
      description: desc,
      isCompleted: false,
    });
  },
  deleteTodo: (index) => {
    todos = todos.filter((todo, ref) => ref !== +index);
    todos = todos.map((todo, index) => ({ ...todo, index: index + 1 }));
    return todos;
  },
  resetTodo: () => {
    todos = [];
    return todos;
  },
};

module.exports = { todos, TodoCRUD };
